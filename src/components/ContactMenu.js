import React from 'react';
import constants from '../const';
import Button from 'react-toolbox/lib/button/Button';
// import IconMenu from 'react-toolbox/lib/menu/IconMenu';
// import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import 'rc-menu/assets/index.css';

const handleSetStatus = function(param) {
    // {key:String, item:ReactComponent, domEvent:Event, keyPath: []}
    console.log('key: ', param.key);
    console.log('item: ', param.item);
    console.log('domEvent: ', param.domEvent);
    console.log('keyPath: ', param.keyPath);
};


const ContactMenu = (props) => {

    return (

        <span>

            <Menu mode="vertical" selectable={false}
            onClick={handleSetStatus}
            
            style={{ float: 'right' }}>
                <SubMenu title="&nbsp;" key="1">
                    <MenuItem key={constants.statusPresent}
                        disabled={
                            props.currentStatus === constants.statusPresent ? true : false
                        }
                    ><i className="material-icons">{constants.iconPersonPresent}</i> Anwesend&nbsp;</MenuItem>
                    <MenuItem key={constants.statusAbsent}
                        disabled={
                            props.currentStatus === constants.statusAbsent ? true : false
                        }
                    ><i className="material-icons">{constants.iconPersonAbsent}</i> Abwesend&nbsp;</MenuItem>
                    <MenuItem key={constants.statusToBeClarified}
                        disabled={
                            props.currentStatus === constants.statusToBeClarified ? true : false
                        }
                    ><i className="material-icons">{constants.iconPersonToBeClarified}</i>In Klärung&nbsp;</MenuItem>
                </SubMenu>
            </Menu>

            {/* <IconMenu className={props.className} icon='more_vert' position='auto' menuRipple>
            <MenuItem >
                <Button
                    style={{ width: '100%' }}
                    onClick={props.handleSetPresent}
                    icon={constants.iconPersonPresent}
                    disabled={
                        props.currentStatus === constants.statusPresent ? true : false
                    }
                    title='Anwesend'
                    value='present'
                    label='Anwesend' />
            </MenuItem>
            <MenuItem>
                <Button
                    style={{ width: '100%' }}
                    onClick={props.handleSetAbsent}
                    title='Abwesend'
                    value='absent'
                    label='Abwesend'
                    disabled={
                        props.currentStatus === constants.statusAbsent ? true : false
                    }
                    icon={constants.iconPersonAbsent} />
            </MenuItem>
            <MenuItem>
                <Button
                    style={{ width: '100%' }}
                    onClick={props.handleSetToBeClarified}
                    title='tbc'
                    value='tbc'
                    label='Klärung'
                    disabled={
                        props.currentStatus === constants.statusToBeClarified ? true : false
                    }
                    icon={constants.iconPersonToBeClarified} />
            </MenuItem>
        </IconMenu > */}
        </span>
    );
};

export default ContactMenu;