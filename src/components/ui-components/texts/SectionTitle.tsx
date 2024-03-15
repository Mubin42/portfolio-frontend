import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SectionTitleProps = HeadingProps & {
	children: React.ReactNode;
};

const SectionTitle: FC<SectionTitleProps> = ({ children, ...props }) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Heading fontSize={{ base: '24px', lg: '64px' }} fontWeight='600' {...props}>
			{children}
		</Heading>
	);
};

export default SectionTitle;
