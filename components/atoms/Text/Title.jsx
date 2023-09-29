import React from 'react';
import Link from 'next/link';
import { Noto_Serif_KR } from 'next/font/google';
import clsx from 'clsx';
import styles from './Title.module.scss';

const notoSerif = Noto_Serif_KR({
	subsets: ['latin'],
	weight: ['200', '400', '700'],
	preload: true,
	variable: '--font-notoSerif',
	display: 'block',
	adjustFontFallback: true,
});

export function Title({ style, className, tag = 'h1', url, children }) {
	return React.createElement(
		tag,
		{
			style,
			className: clsx(styles.tit, className, notoSerif.variable),
		},
		url ? React.createElement(Link, { href: url }, children) : children
	);
}
