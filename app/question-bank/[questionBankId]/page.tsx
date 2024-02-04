import type { Metadata } from 'next'
import Container from '@/components/Container'
import QuestionBankContainer from '@/components/questionbank/QuestionBankContainer'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
    title: 'Pathyakrama | Question Bank',
    description: "This page contains the list of question bank for a given subject"
}

export default function page() {

    return (
        <>
            <Navbar />
            <Container>
                <>
                    <h1 className='text-xl font-semibold text-green-500'>Question Bank</h1>
                    <QuestionBankContainer />
                </>
            </Container>
        </>
    )
}
