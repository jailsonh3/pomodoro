import { Cycle } from './reducer'

export enum ActionType {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
  MARK_CYCLE_AS_FINISHED = 'MARK_CYCLE_AS_FINISHED',
}

export function submitANewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionType.INTERRUPT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARK_CYCLE_AS_FINISHED,
  }
}
