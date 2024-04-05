import { aboutMe } from '@/cms/aboutme';
import { BASE_PADDING } from '@/lib/constants';
import { Button, Flex, Heading, Icon, Stack, StackProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import SectionTitle from '../ui-components/texts/SectionTitle';

type AboutMeProps = StackProps & {};

const AboutMe: FC<AboutMeProps> = ({ ...props }) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Stack spacing={{ base: 4, lg: 8 }} px={BASE_PADDING} {...props}>
			<SectionTitle>{aboutMe.title}</SectionTitle>
			<Text fontSize={{ base: '14px', lg: '24px' }} textAlign='justify'>
				{aboutMe.description}
			</Text>
			<Button
				bgColor='custom-green'
				color='black'
				w='fit-content'
				borderRadius='36px'
				rightIcon={<Icon as={MdOutlineFileDownload} />}
			>
				Download my resume
			</Button>
		</Stack>
	);
};

export default AboutMe;
