import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//import { Link } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { LoginOutlined } from '@mui/icons-material';
import { ListItem, TextField, Typography } from '@mui/material';


function Actionstep (props) {

  const [action, setAction] = React.useState('');

  const [typeValue, setTypeValue] = React.useState("");

  const handleChange = (event) => {
    setAction(event.target.value);
    setTypeValue(event.target.value);
    console.log(event.target.value);
  };

  return(
    <FormControl fullWidth>
        <InputLabel size="small" id="demo-simple-select-label">Action</InputLabel>
        <Select
          size="small"
          labelId="Action"
          id="demo-simple-select"
          value={action}
          label="Action"
          onChange={handleChange}
        >
          <MenuItem value={"click"}>Click</MenuItem>
          <MenuItem value={"fill"}>Fill</MenuItem>
          <MenuItem value={"select"}>Select</MenuItem>
          <MenuItem value={"wait"}>Wait</MenuItem>
          <MenuItem value={"display"}>Display</MenuItem>
        </Select>
      </FormControl>
  )

}


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Tool Panel" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />
    <ListItem>
    <TextField size="small" label="URL"></TextField>
   </ListItem>
   <ListItem>
    <TextField size="small" label="Page Name"></TextField>
   </ListItem>
   <ListItem>
    <TextField size="small" label="Scenario"></TextField>
   </ListItem>
   <ListItem>
    <TextField size="small" label="Tags (comma separated)"></TextField>
   </ListItem>
   <ListItem/>
  </React.Fragment>
);


export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
        <Typography sx={{ mb: 1 }} variant="h6" component="div">   
            Steps
        </Typography>
    </ListSubheader>
    <Divider sx={{ my: 1 }} />
   <ListItem>
    <Actionstep/>
   </ListItem>
   {console.log(Actionstep.typeValue)}
   {Actionstep.typeValue === "click" ? (<>
    <ListItem>
      <TextField size="small" label="Field"></TextField>
    </ListItem>
   </>) 
   : Actionstep.typeValue === "fill" ? (<>
    <ListItem>
      <TextField size="small" label="Field"></TextField>
    </ListItem>
    <ListItem>
      <TextField size="small" label="Value"></TextField>
    </ListItem>
   </>) 
   : Actionstep.typeValue === "wait" ? (<>
   <ListItem>
    <TextField size="small" label="Time"></TextField>
   </ListItem>
   </>) 
   : Actionstep.typeValue === "display" ? (<>
   <ListItem>
    <TextField size="small" label="Message"></TextField>
   </ListItem>
   </>)
    : (<>
    <ListItem>
      <TextField size="small" label="Field"></TextField>
    </ListItem>
    </>)}
    <ListItemButton href='/'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sidebar Icon 2" />
    </ListItemButton>
    <ListItemButton href='/'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sidebar Icon 3" />
    </ListItemButton>
    <ListItemButton href='/'>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Sidebar Icon 4" />
    </ListItemButton>
    
  </React.Fragment>
);
