import Link from 'next/link'

export default function Page(){

    return <>
        Blog
        <Link href="/" scroll={false} className='text-lg text-red-400'>
            home
        </Link>
    </>
}