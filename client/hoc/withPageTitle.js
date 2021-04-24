import React, { Fragment } from 'react'
import Jombotron from '../components/Jombotron'

const withPageTitle = (WrappedComponent, defaultsProps= {}) => {
    const { pageTitle } = defaultsProps
    const hocComponent = (props) => {
        const { className, ...restProps } = props;
        return (
            <Fragment>
                {pageTitle && <Jombotron title={pageTitle} />}
                <div className="withpageTitle">
                    <WrappedComponent {...restProps} />
                </div>
            </Fragment>
        )
    }

    return hocComponent
}

export default withPageTitle;
