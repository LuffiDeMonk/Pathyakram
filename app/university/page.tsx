import type { Metadata } from 'next'
import Container from '../../components/Container'
import UniversityContainer from '../../components/university/UniversityContainer'

export const metadata: Metadata = {
    title: "Pathyakrama | University",
    description: "This page contains information about the universitites and all the courses and subjects that falls under the university"
}

export default function page() {
    return (
        <Container>
            <UniversityContainer />
        </Container>
    )
}
