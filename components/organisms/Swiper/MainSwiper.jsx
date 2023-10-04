import { Title } from '@/components/atoms/Text/Title';
import { PicSlider } from '@/components/molecules/Slider/PicSlider';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import clsx from 'clsx';
import styles from './MainSwiper.module.scss';

SwiperCore.use([Autoplay]);

export function MainSwiper({ list }) {
	const [Index, setIndex] = useState(0);

	return (
		<figure className={clsx(styles.visual)}>
			<PicSlider picList={list} index={Index} />

			<Swiper
				className={clsx(styles.mainSwiper)}
				modules={[Autoplay]}
				autoplay={{ delay: 3000, disableOnInteraction: true }}
				loop={true}
				grabCursor={true}
				slidesPerView={3}
				spaceBetween={70}
				centeredSlides={true}
				onSlideChange={(el) => setIndex(el.realIndex)}
			>
				{list.map((item, idx) => {
					return (
						<SwiperSlide key={idx} className={clsx(styles.swiperSlide)}>
							{({ isActive, isPrev, isNext }) => {
								return (
									<div className={clsx(isActive && styles.on, isPrev && styles.prev, isNext && styles.next)}>
										<Title style={{ color: '#fff' }}>{item.TITLE}</Title>
									</div>
								);
							}}
						</SwiperSlide>
					);
				})}
			</Swiper>
		</figure>
	);
}
