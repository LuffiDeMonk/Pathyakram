import React, { Suspense } from 'react'
import Container from '../components/university/Container'
import UniversityContainer from '../components/university/UniversityContainer'

export default function page() {
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <UniversityContainer />
            </Suspense>
        </Container>
    )
}
