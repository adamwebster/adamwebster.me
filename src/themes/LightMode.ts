import { colors } from '../styles/StyledVariables';
import { DefaultTheme } from 'styled-components';

export const LightMode: DefaultTheme = {
  name: 'light',
  colors: {
    backgroundColor: colors.grey[50],
    borderColor: '#E8E8E8',
    white: '#fff',
    text: '#525252',
    primary: '#FF3131',
    heroBGColor: '#CAE0E7',
    heroText: '#006E90',
    lightPurpleBG: '#FAEFFF',
    error: {
      text: '#FF3131',
      background: '#ffd4d4',
      border: '#FF3131',
    },
  },
};
