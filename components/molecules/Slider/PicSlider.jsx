import { Pic } from '@/components/atoms/Pic/Pic';
import clsx from 'clsx';
import styles from './PicSlider.module.scss';

export function PicSlider({ picList, index }) {
	return (
		<article className={clsx(styles.picSlider)}>
			{picList.map((item, idx) => {
				return (
					<Pic key={idx} className={clsx(idx === index && styles.on)} imgSrc={item.MAIN_IMG} imgAlt={item.TITLE} />
				);
			})}
		</article>
	);
}
