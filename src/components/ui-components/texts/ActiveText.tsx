import useCustomColor from '@/hooks/useCustomColor';
import { Text, TextProps } from '@chakra-ui/react';
import { useAnimate } from 'framer-motion';
import React, { FC, useEffect } from 'react';

/**
 * @description Currently Not in Use
 */

type ActiveTextProps = TextProps & {
	children: React.ReactNode;
	isActive: boolean;
};

const ActiveText: FC<ActiveTextProps> = ({ children, isActive, ...props }) => {
	// hooks
	const { customGreen } = useCustomColor();
	const [textRef, animate] = useAnimate();

	// states

	// variables

	// styles

	// functions

	// effects
	useEffect(() => {
		// animate text when isActive changes
		animate(textRef?.current, {
			scale: isActive ? 1.1 : 1,
			transition: { duration: 0.5 },
		});
	}, [isActive]);

	// components

	return (
		<Text
			ref={textRef}
			fontSize='20px'
			color={isActive ? customGreen : 'white'}
			{...props}
			textDecoration={isActive ? 'underline' : 'none'}
			textUnderlineOffset={isActive ? '8px' : '0'}
		>
			{children}
		</Text>
	);
};

export default ActiveText;
