import { AppBar,Box,styled,Toolbar,Typography,InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding:"0 10px",
    width: "50%",
    borderRadius: "10px",
    margin:"0px 10px 0px 10px"
}))

const Icons = styled(Box)(({theme}) => ({
    display : "none",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display : "flex",
    }
}))

const UserBox = styled(Toolbar)(({theme}) => ({
    display:"flex",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display : "none",
    },
    cursor:"pointer",
}))

function Navbar() {  
    const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'> 
        <StyledToolbar>
            <Typography variant="h6" sx={{bgcolor:"black",padding:"5px",borderRadius:"5px",display : {xs : "none",sm : "block"}}}>Craz-<span style={{color:"orange"}}>E</span></Typography>
            <PetsIcon sx={{fontSize:"30px",color:"orange",bgcolor:"black",padding:"2px",borderRadius:"10px",display : {xs : "block",sm : "none"}}} /> 
            <Search><InputBase  sx={{color:"black",width: "100%",}} placeholder='Search Here Something Friend!! '/></Search>
            <Icons>  
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={11} color="error">
                    <NotificationsIcon />
                </Badge>
                <Avatar onClick={e => setOpen(true)} sx={{width : 30, height : 30}} src="data:image/jpeg;base64,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" />
            </Icons>
            <UserBox onClick={e => setOpen(true)} >
                <Avatar sx={{width : 30, height : 30}} src="data:image/jpeg;base64,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" />
                <Typography variant="span">Elon Musk</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={
            {
                marginTop: "40px",
            }
        }
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>    
  )
}

export default Navbar