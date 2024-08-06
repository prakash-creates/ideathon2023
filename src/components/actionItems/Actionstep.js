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


export const Actionstep =({handleChange,action})=> {

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



