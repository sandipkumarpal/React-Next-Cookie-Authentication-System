import { LoginOutlined, AppstoreOutlined, UserOutlined, LogoutOutlined, MehOutlined } from '@ant-design/icons';

export const ROUTER_PATH = {
    Home: { href: '/', IconComponent: AppstoreOutlined, key: "home", requireAuth: "default"},
    Login: { href: '/login', IconComponent: LoginOutlined, key: "login", requireAuth: true},
    Register: { href: '/register', IconComponent: UserOutlined, key: "register", requireAuth: true},
    User: { href: '', key: 'user', IconComponent: MehOutlined, requireAuth: false, subPath: {
            Logout: { href: '', IconComponent: LogoutOutlined, key: 'logout' },
        }
    }
}