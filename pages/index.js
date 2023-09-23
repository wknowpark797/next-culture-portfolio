import Head from 'next/head';
import axios from 'axios';

export default function Home({ data }) {
	console.log(data.culturalEventInfo.row);

	return (
		<>
			<Head>
				<title>Main</title>
			</Head>

			<main>Main</main>
		</>
	);
}

// ISR 방식 (revalidate 주기설정)
export async function getStaticProps() {
	const KEY = process.env.CULTURE_PUBLIC_API_KEY;
	const TYPE = 'json';
	const SERVICE = 'culturalEventInfo';
	const START_INDEX = 1;
	const END_INDEX = 5;

	const { data } = await axios.get(`${KEY}/${TYPE}/${SERVICE}/${START_INDEX}/${END_INDEX}/`);

	return {
		props: { data },
		revalidate: 60 * 60 * 24,
	};
}
