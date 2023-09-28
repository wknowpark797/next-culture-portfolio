import { ClockLoader } from 'react-spinners';
import clsx from 'clsx';
import styles from './Loading.module.scss';

export function Loading({ className, size = 50, loading = true, color = '#3387da' }) {
	return (
		<ClockLoader
			className={clsx(styles.loading, className)}
			cssOverride={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
			size={size}
			loading={loading}
			color={color}
		/>
	);
}
