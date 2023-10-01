import { Title } from '@/components/atoms/Text/Title';
import { Navbar } from '@/components/molecules/Navbar/Navbar';
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header() {
	return (
		<header className={clsx(styles.header)}>
			<Title url={'/'} className={clsx(styles.logo)}>
				CULTURES.
			</Title>

			<Navbar names={['Find Culture', 'My Favorite', 'Dev']} />
		</header>
	);
}

export default Header;
