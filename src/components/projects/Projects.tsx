import React, { FC } from 'react';
import Section from '../layouts/snapping/Section';
import useCustomColor from '@/hooks/useCustomColor';
import SectionTitle from '../ui-components/texts/SectionTitle';
import { Grid } from '@chakra-ui/react';
import ProjectCard from '../cards/ProjectCard';
import projects from '@/cms/projects';

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = ({}) => {
	// api

	// hooks
	const { darkBackground } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Section gap={{ base: 4, lg: 8 }} bgColor={darkBackground} id='projects'>
			<SectionTitle>{projects.title}</SectionTitle>
			<Grid templateColumns={{ base: '1fr', lg: '2fr 2fr' }} gap={{ base: 6, lg: 8 }}>
				{projects?.doc?.map((project, index) => (
					<ProjectCard key={index} data={project} />
				))}
			</Grid>
		</Section>
	);
};

export default Projects;
