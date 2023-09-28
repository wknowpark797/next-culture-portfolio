import Head from 'next/head';
import { Btn } from '@/components/atoms/Button/Btn';
import { Input } from '@/components/atoms/Form/Input';
import { Table } from '@/components/atoms/Table/Table';
import { Pic } from '@/components/atoms/Pic/Pic';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

function index() {
	const [InputValue, setInputValue] = useState('');

	return (
		<>
			<Head>
				<title>Components Description</title>
			</Head>

			<section className={clsx(styles.dev)}>
				<h1>Components Description</h1>

				<article>
					<h2>Button Component</h2>
					<Btn
						onClick={() => {
							alert('Click Event');
						}}
					>
						Button Click
					</Btn>
					<Btn style={{ marginLeft: '10px' }} isActive={true}>
						Button Active
					</Btn>
				</article>

				<article>
					<h2>Input Component</h2>
					<Input value={InputValue} onChange={setInputValue} />
					<p>value: {InputValue}</p>
				</article>

				<article>
					<h2>Table Component</h2>
					<Table
						data={[
							{
								key1: 'value1-1',
								key2: 'value1-2',
								key3: 'value1-3',
							},
							{
								key1: 'value2-1',
								key2: 'value2-2',
								key3: 'value2-3',
							},
						]}
					/>
				</article>

				<article>
					<h2>Picture Component</h2>
					<div className={clsx(styles.picFrame)}>
						<Pic imgSrc={'/images/example.jpg'} imgAlt={'example.jpg'} priority={true} />
					</div>
				</article>
			</section>
		</>
	);
}

export default index;
