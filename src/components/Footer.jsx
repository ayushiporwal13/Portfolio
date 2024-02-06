import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DataObjectIcon from "@mui/icons-material/DataObject";
import WorkIcon from "@mui/icons-material/Work";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from "@mui/material";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }} margin="5% auto 0">
      <Typography variant="h5" component="div" gutterBottom>
        Ayushi Porwal
      </Typography>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <a href={`#Home`}><BottomNavigationAction label="Home" icon={<HomeIcon />} /></a>
        <a href={`#About`}><BottomNavigationAction label="About" icon={<InfoIcon />} /></a>
        <a href={`#Work`}><BottomNavigationAction label="Work" icon={<WorkIcon />} /></a>
        <a href={`#Projects`}><BottomNavigationAction label="Projects" icon={<DataObjectIcon />} /></a>
      </BottomNavigation>
      <a href='https://www.linkedin.com/in/ayushiporwal/' style={{color:'#627264'}}><LinkedInIcon/></a>
      <a href='https://github.com/ayushiporwal13?tab=repositories' style={{color:'#627264'}}><GitHubIcon/></a>
      <a href='ayushiporwal5@gmail.com' style={{color:'#627264'}}><EmailIcon/></a>
      <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
        &copy; 2023 Ayushi Porwal
        </Typography>
    </Box>
  );
}
