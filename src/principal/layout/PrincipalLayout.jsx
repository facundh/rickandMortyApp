import {Box} from '@mui/material';
import { Navbar, SideBar } from '../components';


const drawerWidth = 240;
export const PrincipalLayout = ({ children }) => {
  return (
    <Box sx={{display:'flex'}}>
        <Navbar drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth} />
        <Box component='main' sx={{flexGrow:1, p:3}}>
            {children}
        </Box>
    </Box>
  )
}
