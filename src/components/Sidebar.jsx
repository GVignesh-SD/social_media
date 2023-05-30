import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
function Sidebar({mode,setMode}) {
  return (
    <Box flex={1} p={2} sx={{display: {xs :"none",sm: "block", md : "block"}}}>
        <Box position="fixed" m={-1}>
        <List>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <GroupsIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="MarketPlace" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <Diversity1Icon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
            <ListItemIcon>
                <DarkModeIcon />
            </ListItemIcon>
            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
        </ListItemButton>
        </ListItem>
    </List>
        </Box>
    </Box>
    
  )
}

export default Sidebar