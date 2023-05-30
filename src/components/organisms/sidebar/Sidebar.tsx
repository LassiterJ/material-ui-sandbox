import React from 'react';
import {Drawer,Divider, Box, Toolbar,List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Mail as MailIcon, Inbox as InboxIcon} from '@mui/icons-material';

const drawerWidth = 240;
const Sidebar = () =>{
    return(
        <Drawer
            variant="permanent"
    sx={{
        width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
>
    <Toolbar />
    <Box sx={{ overflow: 'auto' }}>
    <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
    <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
    </ListItem>
))}
    </List>
    <Divider />
    <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem button key={text}>
    <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
    </ListItem>
))}
    </List>
    </Box>
    </Drawer>
    )
};

export default Sidebar;
