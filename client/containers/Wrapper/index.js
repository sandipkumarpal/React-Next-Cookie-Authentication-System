import React from 'react'
import TopMenu from '../TopMenu'
import { Layout } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const StyledContent = styled(Content)`
    padding: 0 50px;
    margin-top: 64px;
    .site-layout-background {
        min-height: 625px;
        padding-top: 50px;
        .withpageTitle {
            margin-bottom: 40px;
            padding-top: 50px;
        }
        .page-title {
            margin-top: -50px;
        }
    }
`

function AppWrapper({children}) {
    return (
        <Layout style={{ backgroundColor: "#fff"}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <TopMenu />
            </Header>
            <StyledContent className="site-layout">
                <div className="site-layout-background">
                    {children}
                </div>
            </StyledContent>
            <Footer style={{ textAlign: 'center', backgroundColor: "#fff" }}>Sandip Pal</Footer>
        </Layout>
    )
}

export default AppWrapper
