import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({isActive, Icon, title}) => {
    return (
        <div className={`sidebarOptions ${isActive && 'sidebarOptionsActive'}`}>
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarOptions;