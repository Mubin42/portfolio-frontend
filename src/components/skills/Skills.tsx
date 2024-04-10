import { Flex, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionTitle from '../ui-components/texts/SectionTitle';
import { skills } from '@/cms/skills';
import SkillTags from '../ui-components/tags/SkillTags';
import ItemHeading from '../ui-components/texts/ItemHeading';
import Section from '../layouts/snapping/Section';

type SkillsProps = {};

const Skills: FC<SkillsProps> = ({}) => {
	// hooks

	// states

	// variables
	const gap = { base: 2, lg: 3 };
	// styles

	// functions

	// effects

	// components

	return (
		<Section gap={{ base: 4, lg: 8 }}>
			<SectionTitle>{skills?.title}</SectionTitle>
			<Stack spacing={{ base: 6, lg: 8 }}>
				{skills?.doc?.map((skill, idx) => (
					<Stack spacing={gap} key={idx}>
						<ItemHeading>{skill.title}</ItemHeading>
						<Flex wrap='wrap' gap={gap} ml={3}>
							{skill.tags.map((tag, index) => (
								<SkillTags key={index}>{tag}</SkillTags>
							))}
						</Flex>
					</Stack>
				))}
			</Stack>
		</Section>
	);
};

export default Skills;
