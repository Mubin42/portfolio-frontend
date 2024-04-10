import { aboutMe } from '@/cms/aboutme';
import { Button, Icon, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import SectionTitle from '../ui-components/texts/SectionTitle';
import Section from '../layouts/snapping/Section';
import useCustomColor from '@/hooks/useCustomColor';

type AboutMeProps = {};

const AboutMe: FC<AboutMeProps> = ({}) => {
	// hooks
	const { lightBackground } = useCustomColor();
	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Section gap={{ base: 4, lg: 8 }} bgColor={lightBackground}>
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
		</Section>
	);
};

export default AboutMe;
