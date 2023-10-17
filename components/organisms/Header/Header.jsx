import { Title } from '@/components/atoms/Text/Title';
import { Navbar } from '@/components/molecules/Navbar/Navbar';
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header({ blackLogo = false }) {
	return (
		<header className={clsx(styles.header)}>
			<div className={clsx(styles.inner)}>
				<Title url={'/'} className={clsx(styles.logo, blackLogo && styles.blackLogo)}>
					CULTURES.
				</Title>

				<Navbar names={['Find Culture', 'My Favorite', 'Dev']} />
			</div>
		</header>
	);
}

export default Header;
