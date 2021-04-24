import React from 'react'
import TopMenu from '../TopMenu'

function AppWrapper({children}) {
    return (
        <div>
            <TopMenu />
            {children}
        </div>
    )
}

export default AppWrapper
