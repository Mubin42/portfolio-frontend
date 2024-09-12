import { Grid } from '@chakra-ui/react';
import React from 'react';
import Section from '../layouts/snapping/Section';
import HeroText from './HeroText';
import ProfileImage from './ProfileImage';

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
