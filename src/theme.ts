import {extendTheme}from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark'
}

export const colors = {
  primary: {
    50: '#EEF2F6',
    100: '#CFD9E7',
    200: '#B1C1D8',
    300: '#92A9C9',
    400: '#7491B9',
    500: '#5578AA',
    600: '#446088',
    700: '#334866',
    800: '#223044',
    900: '#111822'
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  }
}

export default extendTheme({config, colors})
