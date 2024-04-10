import { MotionValue, useTransform, motion } from 'framer-motion';
import { FC, useEffect } from 'react';

type WordType = {
	children: string;
	range: [number, number];
	progress: MotionValue<number>;
};

const Word: FC<WordType> = ({ children, range, progress }) => {
	const opacity = useTransform(progress, range, [0.2, 1]);

	return (
		<motion.span
			style={{
				opacity: opacity,
				marginRight: '12px',
			}}
		>
			{children}
		</motion.span>
	);
};

export default Word;
