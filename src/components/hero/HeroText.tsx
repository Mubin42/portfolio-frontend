import { Button, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import { MdCallMade } from 'react-icons/md';
import ViewProjectsButton from '../ui-components/buttons/ViewProjectsButton';
import ContactMeButton from '../ui-components/buttons/ContactMeButton';

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
				<ViewProjectsButton />
				<ContactMeButton />
			</Flex>
		</Stack>
	);
};

export default HeroText;
