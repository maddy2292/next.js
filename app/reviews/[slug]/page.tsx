import Image from 'next/image';
import { notFound } from 'next/navigation';
import Heading from '@/app/components/Heading';
import ShareButtons from '@/app/components/ShareButtons';
import { getReview, getSlugs } from '@/lib/reviews';

interface ReviewPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({params:{slug}}) {
    const review =await getReview(slug);
    if (!review) {
        notFound();
    }
    return {
        title: review.title,
    };
}

export default async function ReviewPage ({params: {slug}}) {
    const review =await getReview(slug);
    if (!review) {
        notFound();
    }
    return (
        <>
            <Heading>{review.title}</Heading>
            <div className='flex gap-3 items-baseline'>
                <p className='italic pb-2'>{review.date}</p>
                <ShareButtons/>
            </div>
            <Image src={review.image} alt="" priority
            width="640" height="360" className="mb-2 rounded"
           />
            <article dangerouslySetInnerHTML={{__html: review.body}}
             className='max-w-screen-sm prose prose-slate'/>
        </>
    );
}