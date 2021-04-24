import React from 'react'
import PropTypes from 'prop-types'
import Jombotron from '../components/Jombotron'

const withPageTitle = (WrappedComponent, defaultsProps) => {
    const { pageTitle } = defaultsProps
    const hocComponent = (props) => {
        const { className, ...restProps } = props;
        return (
            <div className={className}>
                <Jombotron title={pageTitle} />
                <WrappedComponent {...restProps} />
            </div>
        )
    }

    // hocComponent.propTypes = {
    // }

    return hocComponent
}

export default withPageTitle;
