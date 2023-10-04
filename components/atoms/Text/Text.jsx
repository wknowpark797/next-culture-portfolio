import React from 'react';
import Link from 'next/link';
import { Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import styles from './Text.module.scss';

const notoSerif = Noto_Serif_KR({
	subsets: ['latin'],
	weight: ['200', '400', '700'],
	preload: true,
	variable: '--font-notoSerif',
	display: 'block',
	adjustFontFallback: true,
});
const notoSans = Noto_Sans_KR({
	subsets: ['latin'],
	weight: ['200', '400', '700'],
	preload: true,
	variable: '--font-notoSans',
	display: 'block',
	adjustFontFallback: true,
});

export function Text({ style, className, type, tag = 'p', isOn = false, url, children }) {
	return React.createElement(
		tag,
		{
			style,
			className: clsx(
				styles.txt,
				className,
				notoSerif.variable,
				notoSans.variable,
				isOn && styles.on,
				styles[`txt-${type}`]
			),
		},
		url ? React.createElement(Link, { href: url }, children) : children
	);
}
