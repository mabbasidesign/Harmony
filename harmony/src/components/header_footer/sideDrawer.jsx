import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            close={() => props.onClose(false)}
        >
            <List>
                <ListItem button onClick={() => console.log("Featured")}>
                    Event start In
                </ListItem>
                <ListItem button onClick={() => console.log("Info")}>
                    Venue Info
                </ListItem>
                <ListItem button onClick={() => console.log("Highlight")}>
                    Highlight
                </ListItem>
                <ListItem button onClick={() => console.log("Pricing")}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log("Location")}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideDrawer;