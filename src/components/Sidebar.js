import React from 'react';
import '../css/Sidebar.css';

/* import from material */
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';

/* import components */
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className="sidebar">

            {/* Navigation Menu */}
            <SidebarOption active Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={PersonIcon} text='Profile' />
            <SidebarOption Icon={GroupIcon} text='Following'/>
            <SidebarOption Icon={SearchIcon} text='Search' />

            {/* Button to Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    )
}

export default Sidebar;