import { Title } from '@/components/atoms/Text/Title';
import { Navbar } from '@/components/molecules/Navbar/Navbar';
import clsx from 'clsx';
import styles from './Header.module.scss';

// Default Header (Black Version Header)

function Header({ whiteHeader = false }) {
	return (
		<header className={clsx(styles.header, whiteHeader && styles.whiteHeader)}>
			<div className={clsx(styles.inner)}>
				<Title url={'/'} className={clsx(styles.logo, whiteHeader && styles.blackLogo)}>
					CULTURES.
				</Title>

				<Navbar names={['Find Culture', 'My Favorite', 'Dev']} />
			</div>
		</header>
	);
}

export default Header;
