import { Button } from './style'

import {RiMoonFill, RiSunLine} from 'react-icons/ri';

interface ToggleThemeProps {
  setTheme: any;
  theme: string;
}

export function ToggleTheme({setTheme, theme}: ToggleThemeProps) {
  return (
    <Button onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} theme={theme}>
      {theme === "dark" ? <RiSunLine /> : <RiMoonFill />}
    </Button>
  )
}
