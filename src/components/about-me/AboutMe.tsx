import { aboutMe } from '@/cms/aboutme';
import { BASE_PADDING } from '@/lib/constants';
import { Button, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import SectionTitle from '../ui-components/texts/SectionTitle';

type AboutMeProps = {};

const AboutMe: FC<AboutMeProps> = ({}) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Stack spacing={8} px={BASE_PADDING}>
			<SectionTitle>{aboutMe.title}</SectionTitle>
			<Text
				fontSize={{ base: '14px', lg: '24px' }}
				w={{ base: '100%', lg: '80%' }}
				textAlign='justify'
			>
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
