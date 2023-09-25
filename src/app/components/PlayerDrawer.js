import { Drawer, Box, Typography, IconButton } from "@mui/material"

import { useState } from "react"


export const PlayerDrawer = (props) => {
    const [isDrawerOpen, setIsDrawerOpen]= useState(false)
  return (
 <Drawer anchor='bottom' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
     <Box p={2} width='200px' textAlign='center' role='presentation'>

        <Typography variant='h3' component='div'>
            Bottom Panel
        </Typography>
     </Box>

 </Drawer>
  )
}
