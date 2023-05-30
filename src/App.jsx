import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Feed from './components/Feed.jsx'
import Navbar from './components/Navbar.jsx'
import Rightbar from './components/Rightbar.jsx'
import { Stack,Box, createTheme } from '@mui/material'
import Add from './components/Add'
import { ThemeProvider } from '@emotion/react'
import { useState } from 'react'
function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme ({
    palette:{
      mode : mode
    }
  })
  return (
 <ThemeProvider theme={darkTheme}>
  <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between"> 
      <Sidebar setMode={setMode} mode={mode} />
      <Feed />
      <Rightbar />
    </Stack>
    <Add />
  </Box>
 </ThemeProvider>
 
 
)
}

export default App
