import { BASE_PADDING } from '@/lib/constants';
import { Flex, Stack, Tag } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionTitle from '../ui-components/texts/SectionTitle';
import useCustomColor from '@/hooks/useCustomColor';
import { skills } from '@/cms/skills';
import SkillTags from '../ui-components/tags/SkillTags';

type SkillsProps = {};

const Skills: FC<SkillsProps> = ({}) => {
	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Stack spacing={16} px={BASE_PADDING}>
			{skills.map((skill, idx) => (
				<Stack spacing={4}>
					<SectionTitle key={idx}>{skill.title}</SectionTitle>
					<Flex wrap='wrap' gap={3}>
						{skill.tags.map((tag, index) => (
							<SkillTags key={index}>{tag}</SkillTags>
						))}
					</Flex>
				</Stack>
			))}
		</Stack>
	);
};

export default Skills;
