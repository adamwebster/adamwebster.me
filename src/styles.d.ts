// import original module declaration
import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      backgroundColor: string;
      white: string;
      borderColor: string;
      text: string;
      primary: string;
      heroBGColor: string;
      heroText: string;
      lightPurpleBG: string;
    };
  }
}
