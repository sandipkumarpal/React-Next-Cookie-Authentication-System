import React from 'react'
import Link from 'next/link'
import { Menu } from 'antd';

const { Item } = Menu;

function TopMenuItem(props) {
    const { key, label, href, className, icon, ...restProps } = props
    return (
        <Item className={className} {...restProps} icon={icon}>
            <Link href={href}>{label}</Link>
        </Item>
    )
}

export default TopMenuItem
