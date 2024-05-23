import Heading from "../app/components/Heading";

export const metadata = {
    title: 'Not Found',
};

export default function NotFoundPage () {
    return (
        <>
            <Heading>Not Found</Heading>
            <p>Oops, the page you requested only exists in a parallel universe.</p>
        </>
    );
}