import { aboutMe } from '@/cms/aboutme';
import useCustomColor from '@/hooks/useCustomColor';
import { Button, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import Section from '../layouts/snapping/Section';
import SectionTitle from '../ui-components/texts/SectionTitle';
import Paragraph from './Paragraph';

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

			<Paragraph value={aboutMe.description} />
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
