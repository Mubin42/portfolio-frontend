import useCustomColor from '@/hooks/useCustomColor';
import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SectionTitleProps = HeadingProps & {
	children: React.ReactNode;
};

const SectionTitle: FC<SectionTitleProps> = ({ children, ...props }) => {
	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Heading
			fontSize={{ base: '32px', lg: '48px' }}
			fontWeight='600'
			textDecoration='underline'
			textDecorationColor={customGreen}
			textDecorationThickness={{ base: '2px', lg: '4px' }}
			textUnderlineOffset={{ base: '8px', lg: '16px' }}
			{...props}
		>
			{children}
		</Heading>
	);
};

export default SectionTitle;
