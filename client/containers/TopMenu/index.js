import React from 'react'
import { Menu } from 'antd';
import TopMenuItem from '../../components/TopMenuItem';
import { ROUTER_PATH } from '../../config/routers'

const MENUS = Object.keys(ROUTER_PATH)

function TopMenu() {
    const renderMenus = (item) => {
        const { href, IconComponent } = ROUTER_PATH[item]
        return (
            <TopMenuItem label={item} key={item} href={href} icon={<IconComponent />} />
        )
    }
    
    return (
        <Menu mode="horizontal">
            {MENUS.map(item => renderMenus(item))}
        </Menu>
    )
}

export default TopMenu
