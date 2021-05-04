// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      backgroundColor: string;
      cardBGColor: string;
      white: string;
      borderColor: string;
      text: string;
      primary: string;
      heroBGColor: string;
      heroText: string;
      lightPurpleBG: string;
      tag: {
        background: string;
        text: string;
      };
      button: {
        background: string;
        textColor: string;
        hoverColor: string;
      };
      error: {
        text: string;
        background: string;
        border: string;
      };
      success: {
        text: string;
        background: string;
        border: string;
      };
      input: {
        background: string;
      };
    };
  }
}
