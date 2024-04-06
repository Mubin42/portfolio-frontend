'use client';
import AboutMe from '@/components/about-me/AboutMe';
import Experiences from '@/components/experiences/Experiences';
import Hero from '@/components/hero/Hero';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import Skills from '@/components/skills/Skills';
import ActiveText from '@/components/ui-components/texts/ActiveText';
import { BASE_PADDING } from '@/lib/constants';
import { Flex, Grid } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			{/* Not Ready For Production */}
			{/* <Grid templateColumns='1fr' rowGap='32px'>
				<AboutMe />
				<Skills />
				<Experiences />
				<Skills />
				<AboutMe />
				<AboutMe />
			</Grid> */}
		</PageLayout>
	);
}
