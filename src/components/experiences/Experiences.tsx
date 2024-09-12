import { experiences } from '@/cms/experience';
import useCustomColor from '@/hooks/useCustomColor';
import { Grid, Heading, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import JobCard from '../cards/JobCard';
import Section from '../layouts/snapping/Section';
import SectionTitle from '../ui-components/texts/SectionTitle';

type ExperiencesProps = {};

const Experiences: FC<ExperiencesProps> = ({}) => {
	// api

	// hooks
	const { lightBackground } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	const jobs = experiences?.doc?.map((experience, index) => (
		<Stack key={index}>
			<Stack>
				<Link href={experience?.company?.href} target='_blank'>
					<Heading
						fontSize={{ base: '18px', lg: '32px' }}
						fontWeight='700'
						_hover={{ textDecoration: 'underline' }}
					>
						{experience?.company?.title}
					</Heading>
				</Link>
				{experience.positions.map((position, positionIndex) => (
					<JobCard key={positionIndex} data={position} />
				))}
			</Stack>
		</Stack>
	));

	return (
		<Section gap={{ base: 4, lg: 8 }} bgColor={lightBackground}>
			<SectionTitle>{experiences.title}</SectionTitle>
			<Grid templateColumns={{ base: '1fr', lg: '2fr 2fr' }} gap={{ base: 6, lg: 8 }}>
				{jobs}
			</Grid>
		</Section>
	);
};

export default Experiences;
