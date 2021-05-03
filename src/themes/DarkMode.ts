import { DefaultTheme } from 'styled-components';

export const DarkMode: DefaultTheme = {
  name: 'dark',
  colors: {
    white: '#fff',
    backgroundColor: '#3A3C61',
    cardBGColor: '#565886',
    borderColor: '#141646',
    text: '#fff',
    primary: '#FFC6C6',
    heroBGColor: '#1E425B',
    heroText: '#fff',
    lightPurpleBG: '#40294A',
    tag: {
      background: '#FFB1B1',
      text: '#843B3B',
    },
    button: {
      background: '#FFB1B1',
      textColor: '#843B3B',
      hoverColor: '#d67b7b',
    },
    error: {
      text: '#FF3131',
      background: '#ffd4d4',
      border: '#FF3131',
    },
    success: {
      text: '#006324',
      background: '#dbffd4',
      border: '#006324',
    },
  },
};
