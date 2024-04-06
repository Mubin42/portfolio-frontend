import useCustomColor from '@/hooks/useCustomColor';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, List, ListIcon, ListItem, Stack, StackProps, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type JobCardProps = StackProps & {
	data: {
		position: string;
		duration: string;
		items: string[];
	};
};

const JobCard: FC<JobCardProps> = ({ data, ...props }) => {
	// api

	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const line = (
		<Box w={{ base: '2px', lg: '4px' }} h='95%' borderRadius='full' bgColor={customGreen}></Box>
	);
	const cardContents = (
		<Stack {...props}>
			<Stack>
				<Text fontSize={{ base: '16px', lg: '24px' }} color={customGreen}>
					{data?.position}
				</Text>
				<Text fontSize={{ base: '8px', lg: '14px' }} color='gray.200'>
					{data?.duration}
				</Text>
			</Stack>
			<List>
				{data?.items?.map((list, listIndex) => (
					<ListItem key={listIndex} color='whitesmoke' fontSize={{ base: '12px', lg: '16px' }}>
						<ListIcon as={ChevronRightIcon} color='green.500' />
						{list}
					</ListItem>
				))}
			</List>
		</Stack>
	);

	return (
		<Flex gap={{ base: 2, lg: 4 }} align='center'>
			{line}
			{cardContents}
		</Flex>
	);
};

export default JobCard;
