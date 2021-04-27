import React, {useMemo} from 'react'
import { Menu } from 'antd';
import axios from 'axios'
import { useRouter } from 'next/router'
import TopMenuItem from '../../components/TopMenuItem';
import { ROUTER_PATH } from '../../config/routers'
import { useUser } from '../../context/userContext';
import { getLogoutService } from '../../config/api';
import withToastHandler from '../../hoc/withToastHandler';

const MENUS = Object.keys(ROUTER_PATH)

function TopMenu(props) {
    const { setSuccessHandler, setErrorHandler } = props;
    const router = useRouter()
    const { user, getUserLogout } = useUser()
    const { asPath } = router;

    const onHandleLogout = async () => {
        try {
            const { data } = await axios.get(getLogoutService())
            await getUserLogout()
            setSuccessHandler(data)
          } catch (err) {
            setErrorHandler(err)
          }
    }

    const menusData = useMemo(() => {
        if (Object.keys(user).length === 0) {
            return MENUS.filter(m => ROUTER_PATH[m].requireAuth)
        }
        return MENUS.filter(m => (!ROUTER_PATH[m].requireAuth || ROUTER_PATH[m].requireAuth === 'default'))   
    }, [user])

    const renderSubMenus = (subMenuObject={}) => {
        const subMenus = Object.keys(subMenuObject)
        return subMenus.map(item => renderMenus(subMenuObject, item))
    }

    const renderMenus = (menuObject, item) => {
        const { href, IconComponent, key, subPath } = menuObject[item];

        return (
            <TopMenuItem
                label={item}
                key={key && key}
                href={href && href}
                icon={IconComponent && <IconComponent />}
                renderSubMenus={renderSubMenus}
                subPath={subPath}
                onClick={key === 'logout' && onHandleLogout}
            />
        )
    }

    return (
        <Menu mode="horizontal" theme="dark" selectedKeys={[asPath]}>
            {menusData.map(item => renderMenus(ROUTER_PATH, item))}
        </Menu>
    )
}

export default withToastHandler(TopMenu)
