import { BASE_PADDING } from '@/lib/constants';
import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SectionProps = FlexProps & {
	children: React.ReactNode;
	bgColor?: string;
};

const Section: FC<SectionProps> = ({ children, bgColor, ...props }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Flex
			w='full'
			minH='100vh'
			justify='center'
			align='center'
			scrollSnapAlign='start'
			flex={1}
			bgColor={bgColor ? bgColor : 'inherit'}
		>
			<Flex flexDir='column' px={BASE_PADDING} flex={1} {...props}>
				{children}
			</Flex>
		</Flex>
	);
};

export default Section;
