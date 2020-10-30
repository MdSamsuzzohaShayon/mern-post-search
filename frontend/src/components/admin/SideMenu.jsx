import React from 'react';
import {Menu} from 'semantic-ui-react';


const SideMenu = (props)=>{
    return (
        <Menu vertical style={{ height: "100vh", width: "100%" }}>
        <Menu.Item
            name='account'
            active={props.activeItem === 'account'}
            onClick={props.handleItemClick}
        />
        <Menu.Item
            name='settings'
            active={props.activeItem === 'settings'}
            onClick={props.handleItemClick}
        />
        <Menu.Item
            name='settings'
            active={props.activeItem === 'settings'}
            onClick={props.handleItemClick}
        />
        <Menu.Item
            name='settings'
            active={props.activeItem === 'settings'}
            onClick={props.handleItemClick}
        />
    </Menu>
    );
}


export default SideMenu;



