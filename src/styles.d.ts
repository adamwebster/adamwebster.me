// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      backgroundColor: string;
      cardColor: string;
      white: string;
      borderColor: string;
      text: string;
      primary: string;
      heroBGColor: string;
      heroText: string;
      lightPurpleBG: string;
      error: {
        text: string;
        background: string;
        border: string;
      };
    };
  }
}
