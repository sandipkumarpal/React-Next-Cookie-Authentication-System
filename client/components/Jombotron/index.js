import React from 'react'
import styled from 'styled-components'

const StyledJombotron = styled.div`
    background-color: #aebadb;
    min-height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        margin: 0;
        color: #fff;
        font-size: 100px;
        line-height: 1;
        text-align: center;
    }
`

function Jombotron(props) {
    const {title, className, ...restProps} = props
    return (
        <StyledJombotron className={className} {...restProps}>
            <h1>{title}</h1>
        </StyledJombotron>
    )
}

export default Jombotron
