import Heading from '@/app/components/Heading';
import Link from 'next/link';

export default function HomePage () {
    return (
        <>
           <Heading>Indie Gamer</Heading>
            <p>Only the best indie games, reviewed for you.</p>
            <div className='bg-white border rounded shadow w-80 hover:shadow-xl sm:w-full'>
                <Link href="reviews/stardew-valley" className="flex flex-col sm:flex-row">
                    <img src="/images/stardew-valley.jpg" alt="" width="320" height="180" className="rounded-t sm:rounded-l sm:rounded-r-none"/>
                    <h2 className='font-semibold font-orbitron py-1 text-center'>
                        Stardew Valley
                    </h2>
                </Link>
            </div>
        </>
    )
}