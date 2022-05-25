import React from 'react'

import { Container } from './style'

export default function Button(props) {
    return(
        <Container color={props.isBlue}>
            <button onClick={props.onClick}>
                {props.content}
            </button>
        </Container>
    )
}