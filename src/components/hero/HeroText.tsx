import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import ViewProjectsButton from '../ui-components/buttons/ViewProjectsButton';
import ContactMeButton from '../ui-components/buttons/ContactMeButton';
import { notFound } from 'next/navigation';

type HeroTextProps = {};

const HeroText: FC<HeroTextProps> = ({}) => {
	// hooks

	// states

	// variables
	const baseFontSize = { base: '16px', lg: '32px' };
	const lgFontSize = { base: '24px', lg: '54px' };
	const fontWeight = '500';
	const color = 'custom-green'; // Consider using a theme value
	const buttonSize = { base: 'sm', lg: 'lg' };

	// styles

	// functions

	const handleNotFound = () => {
		notFound();
	};

	// effects

	// components

	return (
		<Stack spacing={{ base: 2, lg: 4 }}>
			<Text fontSize={baseFontSize}>Hello I am</Text>
			<Heading fontSize={lgFontSize} fontWeight={fontWeight} color={color}>
				Kazi Ehsanul Mubin
			</Heading>
			<Heading fontSize={lgFontSize} fontWeight={fontWeight}>
				A Software Engineer
			</Heading>
			<Flex gap={4} py={{ base: 2, lg: 4 }}>
				<ViewProjectsButton onClick={handleNotFound} />
				<ContactMeButton onClick={handleNotFound} />
			</Flex>
		</Stack>
	);
};

export default HeroText;
