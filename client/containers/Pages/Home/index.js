import React from 'react'
import withPageTitle from '../../../hoc/withPageTitle'

function HomePage() {
    return (
        <div>
            HomePage
        </div>
    )
}

const defaultsProps = {
    pageTitle: 'Landing'
}

export default withPageTitle(HomePage, defaultsProps)