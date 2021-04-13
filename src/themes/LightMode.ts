import { colors } from "../styles/StyledVariables";
import { DefaultTheme } from 'styled-components';

export const LightMode: DefaultTheme = {
    name: 'light',
    colors: {
        backgroundColor: colors.grey[50],
        text: '#000',
        primary: '#006E90',
        heroBGColor: '#CAE0E7',
        heroText: '#006E90',
        lightPurpleBG: '#FAEFFF',
    }
}