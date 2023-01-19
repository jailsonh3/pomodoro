import 'styled-components'
import { defaultColor } from '../styles/themes/default'

type ThemeType = typeof defaultColor

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
