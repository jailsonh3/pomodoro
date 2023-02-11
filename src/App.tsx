import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleProvider } from './context/CycleContext'

// import { Button } from './components/Button'
import { Router } from './Router'
import { GlobalStyled } from './styles/global'

import { defaultColor } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultColor}>
      <BrowserRouter>
        <CycleProvider>
          <Router />
        </CycleProvider>
      </BrowserRouter>

      <GlobalStyled />
    </ThemeProvider>
  )
}
