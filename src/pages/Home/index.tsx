import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

import { CyclesContext } from '../../context/CycleContext'

import { CycleForm } from './components/CycleForm'
import { Countdown } from './components/Countdown'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'o ciclo precisa ser de no máximo de 60 minutos')
    .max(60, 'o ciclo precisa ser de no mínimo de 5 minutos'),
})

type CycleFormDate = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, submitANewCycle, interruptCycle } =
    useContext(CyclesContext)

  const cycleForm = useForm<CycleFormDate>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = cycleForm

  const task = watch('task')
  const isSubmitFormDisable = !task

  function handleSubmitANewCycle(data: CycleFormDate) {
    submitANewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleSubmitANewCycle)}>
        <FormProvider {...cycleForm}>
          <CycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitFormDisable} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
