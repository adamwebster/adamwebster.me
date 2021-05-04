import { colors } from '../styles/StyledVariables';
import { DefaultTheme } from 'styled-components';

export const LightMode: DefaultTheme = {
  name: 'light',
  colors: {
    backgroundColor: colors.grey[50],
    cardBGColor: '#fff',
    borderColor: '#E8E8E8',
    white: '#fff',
    text: '#525252',
    primary: '#d03030',
    heroBGColor: '#CAE0E7',
    heroText: '#006E90',
    lightPurpleBG: '#FAEFFF',
    tag: {
      background: '#ffe3e3',
      text: '#a23c3c',
    },
    button: {
      background: '#d03030',
      textColor: '#FFF',
      hoverColor: '#c72525',
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
    input: {
      background: '#f4f4f4',
    },
  },
};
