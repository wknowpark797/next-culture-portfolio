import { Text } from '@/components/atoms/Text/Text';
import clsx from 'clsx';
import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={clsx(styles.footer)}>
			<div className={clsx(styles.inner)}>
				<Text>2023 All rights reserved.</Text>
			</div>
		</footer>
	);
}

export default Footer;
