import Link from 'next/link'
import { Modal } from '../components/modal'

export default function Page() {
    return <>
        the about page
        <br></br>
        <Link href="/" scroll={false} className='text-lg text-red-400'>
            home
        </Link>
        <Modal>
            <h1>Log in</h1>
        </Modal>
        

    </>
}