import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
    title: 'My page',
}

export default function Page() {
    return <>
        {/* Hello, Dashboard page! */}
        <br></br>
        <Link href="/" scroll={false} className='text-lg text-red-400'>
            home
        </Link>
        

    </>
}