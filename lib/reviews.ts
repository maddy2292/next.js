import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import  matter from 'gray-matter';

export interface Review {
    slug: string;
    title: string;
    date: string;
    image: string;
    body: string;
}

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string): Promise<Review> {
    const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const {content, data: {title, date, image} } = matter(text);
    const body = marked(text);
    return {slug, title, date, image, body};
}

export async function getReviews(): Promise<Review[]> {
    const slugs = await getSlugs();
    const reviews: Review[] = [];
    for (const slug of slugs) {
      const review = await getReview(slug);
      reviews.push(review);
    }
    reviews.sort((a, b) => b.date.localeCompare(a.date));
    return reviews;
}

export async function getSlugs() {
  const files = await readdir('./content/reviews');
  return files.filter((file) => file.endsWith('.md'))
      .map((file) => file.slice(0, -'.md'.length));
}