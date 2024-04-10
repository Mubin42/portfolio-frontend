import React from 'react';
import { Grid, Spacer } from '@chakra-ui/react';
import ProfileImage from './ProfileImage';
import HeroText from './HeroText';
import Section from '../layouts/snapping/Section';

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
	return (
		<Section>
			<Grid
				flex={{ base: 0, lg: 1 }}
				templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
				alignItems='center'
				justifyItems='space-around'
				gap={{ base: 2, lg: 8 }}
			>
				<ProfileImage />
				<HeroText />
			</Grid>
		</Section>
	);
};

export default Hero;
