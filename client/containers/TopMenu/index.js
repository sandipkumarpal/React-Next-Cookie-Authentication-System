import React from 'react'
import { Menu } from 'antd';
import { useRouter } from 'next/router'
import TopMenuItem from '../../components/TopMenuItem';
import { ROUTER_PATH } from '../../config/routers'

const MENUS = Object.keys(ROUTER_PATH)

function TopMenu() {
    const router = useRouter()
    const { asPath } = router;

    const renderMenus = (item) => {
        const { href, IconComponent } = ROUTER_PATH[item]
        return (
            <TopMenuItem
                label={item}
                key={href}
                href={href}
                icon={<IconComponent />}
            />
        )
    }

    return (
        <Menu mode="horizontal" theme="dark" selectedKeys={[asPath]}>
            {MENUS.map(item => renderMenus(item))}
        </Menu>
    )
}

export default TopMenu
