import { Heading, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import SectionTitle from '../ui-components/texts/SectionTitle';
import { experiences } from '@/cms/experience';
import { BASE_PADDING } from '@/lib/constants';
import Link from 'next/link';
import ItemHeading from '../ui-components/texts/ItemHeading';
import useCustomColor from '@/hooks/useCustomColor';

type ExperiencesProps = {};

const Experiences: FC<ExperiencesProps> = ({}) => {
	// api

	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	const jobs = experiences?.doc?.map((experience, index) => (
		<Stack key={index}>
			<Stack>
				<Link href={experience?.company?.href}>
					<Heading fontSize={{ base: '18px', lg: '32px' }} fontWeight='700' color={customGreen}>
						{experience?.company?.title}
					</Heading>
				</Link>
				{experience.positions.map((position, positionIndex) => (
					<Stack key={positionIndex} spacing={2}>
						<Stack spacing={1}>
							<Text>{position?.position}</Text>
							<Text>{position?.duration}</Text>
						</Stack>
						<Stack spacing={1}>
							{position?.items?.map((list, listIndex) => (
								<Text key={listIndex}>{list}</Text>
							))}
						</Stack>
					</Stack>
				))}
			</Stack>
		</Stack>
	));

	return (
		<Stack spacing={{ base: 4, lg: 8 }} px={BASE_PADDING}>
			<SectionTitle>{experiences.title}</SectionTitle>
			<Stack spacing={{ base: 6, lg: 8 }}>{jobs}</Stack>
		</Stack>
	);
};

export default Experiences;
