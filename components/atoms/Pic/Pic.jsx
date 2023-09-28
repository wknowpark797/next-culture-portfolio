import Image from 'next/image';
import { ClockLoader } from 'react-spinners';
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
			<ClockLoader
				cssOverride={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				size={100}
				loading={!IsLoaded}
			/>
		</div>
	);
}
