import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd';

const { Item, SubMenu } = Menu;

function TopMenuItem(props) {
    const { key, label, href, className, icon, subPath, renderSubMenus, onClick, ...restProps } = props
    if (subPath) {
        return (
            <SubMenu className={className} {...restProps} icon={icon} title={label}>
                {renderSubMenus(subPath)}
            </SubMenu>
        )
    }
    return (
        <Item className={className} onClick={onClick} icon={icon} {...restProps}>
            <Link href={href}>{label}</Link>
        </Item>
    )
}

export default TopMenuItem
