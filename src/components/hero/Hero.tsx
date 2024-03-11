import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type HeroProps = {};

const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<Flex flexDir='column'>
			<Text>This is the hero Section</Text>
			{/* {Array.from({ length: 500 }).map((_, index) => (
				<Text key={index}>This is the hero Section</Text>
			))} */}
		</Flex>
	);
};

export default Hero;
