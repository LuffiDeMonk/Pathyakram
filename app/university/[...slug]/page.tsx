import Container from '@/components/Container'
import ResourceContainer from '@/components/resource/ResourceContainer'
import SemesterContainer from '@/components/semester/SemesterContainer'
import StreamContainer from '@/components/stream/StreamContainer'
import SubjectContainer from '@/components/subject/SubjectContainer'

import React from 'react'

export default function page({ params, searchParams }: {
    params: {
        slug: string[],
    }
    searchParams?: {
        q?: string
    }
}) {
    let searchQuery = searchParams?.q || ''


    if (params.slug.length === 1) {
        return (
            <Container>
                <StreamContainer universityName={params.slug} searchParams={searchQuery} />
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
