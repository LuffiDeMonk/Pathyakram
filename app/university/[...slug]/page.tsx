import Container from '@/app/components/university/Container'
import StreamContainer from '@/app/components/university/stream/StreamContainer'
import SemesterContainer from '@/app/components/university/stream/semester/SemesterContainer'
import SubjectContainer from '@/app/components/university/stream/semester/subject/SubjectContainer'
import ResourceContainer from '@/app/components/university/stream/semester/subject/resource/ResourceContainer'
import React from 'react'

export default function page({ params }: { params: { slug: string[] } }) {
    if (params.slug.length === 1) {
        return (
            <Container>
                <StreamContainer universityName={params.slug} />
            </Container>
        )
    }
    if (params.slug.length === 2) {
        return (
            <Container>
                <SemesterContainer slug={params.slug} />
            </Container>
        )
    }
    if (params.slug.length === 3) {
        return (
            <Container>
                <SubjectContainer slug={params.slug} />
            </Container>
        )
    }
    if (params.slug.length === 4) {
        return (
            <Container>
                <ResourceContainer />
            </Container>
        )
    }

}
