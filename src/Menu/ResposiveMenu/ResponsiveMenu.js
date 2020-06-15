import React, { useState } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Backdrop from '../Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer';

export default function ResponsiveMenu() {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    function handleDrawerClick() {
        setSideDrawerOpen(true)
        console.log('ok')
    }

    function handleBackdropClick() {
        setSideDrawerOpen(false)
    }

    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={handleBackdropClick}/>;
    }

    return (
        <div>
            <Toolbar onClick={handleDrawerClick} />
            <SideDrawer show={sideDrawerOpen} />
            {backdrop}
        </div>
    )
}