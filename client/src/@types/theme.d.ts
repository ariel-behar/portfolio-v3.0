import { ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {}

    interface ThemeOptions {}

    interface Palette {
        custom: {
            blue: {
                main: string | PaletteColor
            },
            grey: {
                main: string | PaletteColor
            },
            black: {
                main: string | PaletteColor
            }, 
            green: {
                main: string | PaletteColor
            }
        },
        text: {
            tertiary: PaletteColor
        }
    }

    interface PaletteOptions {
        custom: {
            blue: PaletteColorOptions,
            grey: PaletteColorOptions,
            black: PaletteColorOptions,
            green: PaletteColorOptions
        },
        text: {
            tertiary: PaletteColorOptions
        }
    }

    interface TypeText {
        tertiary: PaletteColorOptions
    }

}