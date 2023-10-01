import { useRouter } from 'next/router';
import { Text } from '@/components/atoms/Text/Text';
import clsx from 'clsx';
import styles from './Navbar.module.scss';

export function Navbar({ names }) {
	const router = useRouter();
	const path = router.asPath.substring(1);

	return (
		<nav className={clsx(styles.nav)}>
			{names.map((el) => {
				const url = el.toLowerCase().split(' ').join('-');

				if (path === url) {
					return (
						<Text key={url} tag={'span'} isOn={true}>
							{el}
						</Text>
					);
				} else {
					return (
						<Text key={url} tag={'span'} url={`/${url}`}>
							{el}
						</Text>
					);
				}
			})}
		</nav>
	);
}
