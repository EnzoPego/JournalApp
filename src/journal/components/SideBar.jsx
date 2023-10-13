import { TurnedInNot } from "@mui/icons-material";
import {Box,Divider,Drawer,List,ListItem,ListItemButton, ListItemIcon,Toolbar,Typography,Grid,ListItemText,} from "@mui/material";
import { useSelector } from "react-redux";
  

export const SideBar = ({ drawerWidth = 240 }) => {

    const {displayName} = useSelector (state => state.auth)

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
          {/* <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                      <Typography variant='h6' noWrap component='div'>
                          Enzo Pego
                      </Typography>
                  </Box> */}
        </Toolbar>

        <Divider />

        <List>
          {["Enero", "Febrero", "Marzo", "Abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText
                    secondary={"Lorem ipsum dolor sit amet consectetur "}
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};