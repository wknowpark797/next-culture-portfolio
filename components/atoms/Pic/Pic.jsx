import Image from 'next/image';
import { Loading } from '../Loading/Loading';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './Pic.module.scss';

export function Pic({ style, className, imgSrc, imgAlt, priority = false }) {
	const [IsLoaded, setIsLoaded] = useState(false);

	return (
		<div style={style} className={clsx(styles.pic, className)}>
			<Image
				src={imgSrc}
				alt={imgAlt}
				priority={priority}
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				onLoadingComplete={() => setIsLoaded(true)}
			/>

			{/* Image Loading */}
			<Loading loading={!IsLoaded} />
		</div>
	);
}
