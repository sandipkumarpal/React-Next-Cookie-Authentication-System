import React, { useEffect, useState } from 'react'
import { message } from 'antd';

const withToastHandler = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => {
        const [errorHandler, setErrorHandler] = useState()
        const [successHandler, setSuccessHandler] = useState()
        
        const openErrorToastMessage = ({ errorHandler={}, type='error'}) => {
            return message[type](errorHandler.response && errorHandler.response.data);
        };
        const openSuccessToastMessage = ({ successHandler={}, type='success'}) => {
            return message[type](successHandler &&
                successHandler.data &&
                successHandler.data.ok && 
                'Successfully Register!!' );
        };

        const clearToastMessage = () => {
            setSuccessHandler()
            setErrorHandler()
        }

        useEffect(() => {
            if(!!errorHandler) {
                openErrorToastMessage({errorHandler})
            }
            if(!!successHandler) {
                openSuccessToastMessage({successHandler})
            }
            if(!!errorHandler || !!successHandler) {
                clearToastMessage()
            }
        }, [errorHandler, successHandler])

        return <WrappedComponent 
            {...props}
            setErrorHandler={setErrorHandler}
            setSuccessHandler={setSuccessHandler}
        />
    }

    return hocComponent
}

export default withToastHandler;
