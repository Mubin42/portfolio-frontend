import React from 'react';
import { Flex, FlexProps, Grid, Spacer } from '@chakra-ui/react';
import { BASE_PADDING } from '@/lib/constants';
import ProfileImage from './ProfileImage';
import HeroText from './HeroText';

type HeroProps = FlexProps & {};

const Hero: React.FC<HeroProps> = ({ ...props }) => {
	return (
		<Flex flexDir='column' h='100vh' px={BASE_PADDING} {...props}>
			<Grid
				flex={{ base: 0, lg: 1 }}
				templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
				alignItems='center'
				justifyItems='space-around'
				gap={{ base: 2, lg: 8 }}
			>
				<Spacer hideFrom='sm' h='10vh' />
				<ProfileImage />
				<HeroText />
			</Grid>
		</Flex>
	);
};

export default Hero;
