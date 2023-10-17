import { Fragment } from 'react';
import { Text } from '@/components/atoms/Text/Text';
import clsx from 'clsx';
import styles from './Breadcrumb.module.scss';

export function Breadcrumb({ data }) {
	return (
		<nav className={clsx(styles.breadcrumb)}>
			{data.map((name, idx) => {
				const result = name.includes('-')
					? name
							.split('-')
							.map((txt) => {
								return txt.charAt(0).toUpperCase() + txt.slice(1);
							})
							.join(' ')
					: name.charAt(0).toUpperCase() + name.slice(1);

				if (idx === data.length - 1) {
					return (
						<Text key={idx} type={'nav'} isOn={true}>
							{result}
						</Text>
					);
				} else {
					return (
						<Fragment key={idx}>
							<Text type={'nav'} url={`/${name}`}>
								{result ? result : 'Home'}
							</Text>
							<span> / </span>
						</Fragment>
					);
				}
			})}
		</nav>
	);
}
