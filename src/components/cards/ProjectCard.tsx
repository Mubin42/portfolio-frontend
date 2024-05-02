import useCustomColor from '@/hooks/useCustomColor';
import { Button, Flex, Grid, Icon, Image, Stack, Tag, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { MdCallMade } from 'react-icons/md';

type ProjectCardProps = {
	data: {
		title: string;
		description: string;
		techStack: string[];
		image: string;
		link: string;
	};
};

const ProjectCard: FC<ProjectCardProps> = ({ data }) => {
	// api

	// hooks
	const { lightBackground, customGreen, darkBackground } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Grid
			flex={1}
			templateColumns={{ base: '1fr', lg: '6fr 4fr' }}
			bgColor={lightBackground}
			gap={{ base: 4, lg: 8 }}
			borderRadius={16}
			p={4}
		>
			<Stack>
				<Text fontSize={{ base: '16px', lg: '24px' }} color={customGreen}>
					{data?.title}
				</Text>
				<Text color='whitesmoke' fontSize={{ base: '12px', lg: '16px' }}>
					{data?.description}
				</Text>
				<Flex flexWrap='wrap' gap={2}>
					{data?.techStack?.map((tech, index) => (
						<Tag key={index} size={{ base: 'sm', lg: 'md' }} colorScheme='green'>
							{tech}
						</Tag>
					))}
				</Flex>
			</Stack>
			<Flex bgColor={darkBackground} borderRadius={8}>
				<Image src={data?.image} alt={data?.title} borderRadius={8} objectFit='contain' />
			</Flex>
		</Grid>
	);
};

export default ProjectCard;
