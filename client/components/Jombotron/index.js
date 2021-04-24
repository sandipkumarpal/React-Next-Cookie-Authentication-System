import React from 'react'
import styled from 'styled-components'

const StyledJombotron = styled.div`
    min-height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        margin: 0;
        color: #aebadb;
        font-size: 100px;
        line-height: 1;
        text-align: center;
    }
`

function Jombotron(props) {
    const {title, className, ...restProps} = props
    return (
        <StyledJombotron className={'page-title'} {...restProps}>
            <h1>{title}</h1>
        </StyledJombotron>
    )
}

export default Jombotron
