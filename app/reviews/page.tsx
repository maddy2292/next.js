import Link from 'next/link';
import Heading from '@/app/components/Heading';
import { getReviews } from '@/lib/reviews';

export const metadata = {
    title: 'Reviews',
};

export default async function ReviewsPage () {
    const reviews = await getReviews();

    return (
        <>
            <Heading>Reviews</Heading>
            <ul className='flex flex-row flex-wrap gap-3'>
                {reviews.map((review) =>(
                    <li key={review.slug}
                     className='bg-white border w-80 hover:shadow-xl'>
                        <Link href={`/reviews/${review.slug}`}>
                            <img src={`${review.image}`} alt="" width="320" height="180" className="mb-2 rounded"/>
                            <h2 className='font-semibold font-orbitron py-1 text-center'>
                                {review.title}
                            </h2>
                        </Link>
                    </li>

                ))}
            </ul>
        </>
    )
}