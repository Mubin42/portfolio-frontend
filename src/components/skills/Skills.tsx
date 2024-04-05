import { BASE_PADDING } from '@/lib/constants';
import { Flex, Stack, Tag } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionTitle from '../ui-components/texts/SectionTitle';
import useCustomColor from '@/hooks/useCustomColor';
import { skills } from '@/cms/skills';
import SkillTags from '../ui-components/tags/SkillTags';
import ItemHeading from '../ui-components/texts/ItemHeading';

type SkillsProps = {};

const Skills: FC<SkillsProps> = ({}) => {
	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables
	const gap = { base: 2, lg: 3 };
	// styles

	// functions

	// effects

	// components

	return (
		<Stack spacing={{ base: 4, lg: 8 }} px={BASE_PADDING}>
			<SectionTitle>{skills?.title}</SectionTitle>
			<Stack spacing={{ base: 6, lg: 8 }}>
				{skills?.doc?.map((skill, idx) => (
					<Stack spacing={gap}>
						<ItemHeading key={idx}>{skill.title}</ItemHeading>
						<Flex wrap='wrap' gap={gap}>
							{skill.tags.map((tag, index) => (
								<SkillTags key={index}>{tag}</SkillTags>
							))}
						</Flex>
					</Stack>
				))}
			</Stack>
		</Stack>
	);
};

export default Skills;
