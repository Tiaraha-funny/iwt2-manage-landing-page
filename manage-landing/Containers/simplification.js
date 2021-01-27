import React from 'react'
import Simplification from '../components/simplification'
import { Container } from '../components/simplification/styles/simplification'


export default function simplificationContainer() {
    return (
        <Container>
            <Simplification.Title>Simpify how your team works today</Simplification.Title>
            <Simplification.Button>Get sart</Simplification.Button>
        </Container>
    )
}
