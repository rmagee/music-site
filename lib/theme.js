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
        fontFamily: [
            'Oswald',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Oswald';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
        },
    },
    title: {
        flexGrow: 1,
        textAlign: "center"
    }
};