import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Button } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ListItem, TextField } from '@mui/material';
import {Actionstep} from './Actionstep'

export const Steps =()=>{ 
    const [action, setAction] = React.useState('');
    const [typeValue, setTypeValue] = React.useState("");
    const [steps, setSteps] = React.useState([]);

    const handleChange = (event) => {
      setAction(event.target.value);
      setTypeValue(event.target.value);
    };

    const handleAddSteps = () => {
      setSteps([...steps, steps]);
    }

    return (
    <React.Fragment>
     <ListItem>
      <Actionstep handleChange={handleChange} action={action}/>
     </ListItem>
     
     {typeValue === "click" ? (
      <ListItem>
        <TextField fullWidth size="small" label="Click"></TextField>
      </ListItem>) 
     : typeValue === "fill" ? (<>
      <ListItem>
        <TextField fullWidth size="small" label="Field"></TextField>
      </ListItem>
      <ListItem>
        <TextField fullWidth size="small" label="Value"></TextField>
      </ListItem>
     </>) 
     : typeValue === "wait" ? (<>
     <ListItem>
      <TextField fullWidth size="small" label="Time"></TextField>
     </ListItem>
     </>) 
     : typeValue === "display" ? (<>
     <ListItem>
      <TextField fullWidth size="small" label="Message"></TextField>
     </ListItem>
     </>)
      : (<>
      <ListItem>
        <TextField fullWidth size="small" label="Field"></TextField>
      </ListItem>
      </>)}
      <Divider sx={{ my: 1 }} />
      <Button variant='outlined' sx={{ mx: 8 }} onClick={handleAddSteps}> <AddCircleOutlineOutlinedIcon fontSize='large' color='success'/> &nbsp; &nbsp; Add Step</Button>
      <div/>
      <Button variant='contained' sx={{ mx: 5, my : 2 }} type='submit'>Generate Feature File</Button>
      {/* <ListItemButton fullWidth href='/'>
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
      <Divider sx={{ my: 1 }} /> */}
    </React.Fragment>
  )};
  