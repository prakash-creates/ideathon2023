import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import { ListItem, TextField, Typography } from '@mui/material';

export const MainListItems =()=>{ 
    return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Tool Panel" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItem>
      <TextField fullWidth size="small" label="URL"></TextField>
     </ListItem>
     <ListItem>
      <TextField fullWidth size="small" label="Page Name"></TextField>
     </ListItem>
     <ListItem>
      <TextField fullWidth size="small" label="Scenario"></TextField>
     </ListItem>
     <ListItem>
      <TextField fullWidth size="small" label="Test Name"></TextField>
     </ListItem>
     <ListItem>
      <TextField fullWidth size="small" label="Tags (comma separated)"></TextField>
     </ListItem>
     <ListItem/>
     <ListSubheader fullWidth component="div" inset>
          <Typography sx={{ mb: 1 }} variant="h6" component="div">   
              Steps
          </Typography>
      </ListSubheader>
      <Divider sx={{ my: 1 }} />
    </React.Fragment>
  )};