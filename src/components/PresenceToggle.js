import React from 'react';
import ContactMenu from './ContactMenu';

const PresenceToggle = (props) => {

    return (
        <div className={props.myStyle}>
            <i className="icon_top material-icons">{props.iconName}</i><span className="lastChange">{props.txtLastChange}</span>
            <label className='labelPerson'>{props.person.firstName} {props.person.lastName}</label>
            <ContactMenu
                className="xcontactMenu"
                currentStatus={props.person.presence}
                handleSetPresent={props.handleSetPresent}
                handleSetAbsent={props.handleSetAbsent}
                handleSetToBeClarified={props.handleSetToBeClarified} /><br />
            <br />
            <label className='labelScopes'>{props.scopeDescriptions}</label>&nbsp;
        </div >
    );
};

export default PresenceToggle;

