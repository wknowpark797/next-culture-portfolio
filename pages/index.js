import Head from 'next/head';
import { MainSwiper } from '@/components/organisms/Swiper/MainSwiper';
import axios from 'axios';
import clsx from 'clsx';
import styles from './main.module.scss';

export default function Home({ data }) {
	const items = data.culturalEventInfo.row;

	return (
		<>
			<Head>
				<title>Main</title>
			</Head>

			<main>
				<MainSwiper list={items} />
			</main>
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
