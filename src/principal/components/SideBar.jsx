import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >

        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs:'block'},
                "& .MuiDrawer-paper": { boxSizing:'border-box', width: drawerWidth }             
                }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Facundo Herrera
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {['Morty ALive', 'Rick Human', 'Morty'].map((text)=> (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text} />
                                <ListItemText secondary={'Rick And Morty'} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>

    </Box>
  );
};
