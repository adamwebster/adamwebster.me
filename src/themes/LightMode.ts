import { colors } from '../styles/StyledVariables';
import { DefaultTheme } from 'styled-components';
import { text } from '@fortawesome/fontawesome-svg-core';

export const LightMode: DefaultTheme = {
  name: 'light',
  colors: {
    backgroundColor: colors.grey[50],
    cardBGColor: '#fff',
    borderColor: '#E8E8E8',
    white: '#fff',
    text: '#525252',
    primary: '#FF3131',
    heroBGColor: '#CAE0E7',
    heroText: '#006E90',
    lightPurpleBG: '#FAEFFF',
    tag: {
      background: '#ffe3e3',
      text: '#FF3131',
    },
    button: {
      backgroundColor: '#FF3131',
      textColor: '#FFF',
      hoverColor: '#c72525',
    },
    error: {
      text: '#FF3131',
      background: '#ffd4d4',
      border: '#FF3131',
    },
  },
};
