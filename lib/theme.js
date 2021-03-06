export const theme = {
    palette: {
        type: 'light',
        primary: {
            main: '#889db8',
            contrastText: 'rgba(243,238,238,0.87)',
        },
        secondary: {
            main: '#608c8c',
        },
        background: {
            default: '#a3b9d0',
            paper: '#889db8',
        },
        text: {
            primary: '#ffffff',
            secondary: '#ffffff',
            hint: 'rgba(253,253,253,0.38)',
            disabled: '#757575',
        },
        error: {
            main: '#ff0000',
        },
    },
    typography: {
        fontFamily: "Oswald, sans-serif",
        body1:{
            fontFamily: "Oswald"
        },
        root:{
            fontFamily: "Oswald"
        }
    },
    overrides:{
      MuiTypography: {
          root:{
              fontFamily: '"Oswald", sans-serif'
          },
          body1:{
              fontFamily: '"Oswald", sans-serif'
          }
      }
    },
    title: {
        flexGrow: 1,
        textAlign: "center"
    }
};