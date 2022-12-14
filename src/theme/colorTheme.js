import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

export const colorTheme = createTheme({
    palette:{
        primary:{
            main:'#388e3c'
        },
        secondary:{
            main:'#000000'
        },
        error:{
            main:red.A400
        }
    }
})