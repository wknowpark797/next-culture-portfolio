import { Text } from '@/components/atoms/Text/Text';
import clsx from 'clsx';
import styles from './Footer.module.scss';

// Default Footer (Black Version Footer)

function Footer({ whiteFooter = false }) {
	return (
		<footer className={clsx(styles.footer, whiteFooter && styles.whiteFooter)}>
			<div className={clsx(styles.inner)}>
				<Text style={{ color: '#888' }}>2023 All rights reserved.</Text>
			</div>
		</footer>
	);
}

export default Footer;
