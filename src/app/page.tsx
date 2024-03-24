'use client';
import AboutMe from '@/components/about-me/AboutMe';
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
	const ref1 = useRef(null);
	const isInView1 = useInView(ref1);

	const ref2 = useRef(null);
	const isInView2 = useInView(ref2);

	const ref3 = useRef(null);
	const isInView3 = useInView(ref3);

	const ref4 = useRef(null);
	const isInView4 = useInView(ref4);

	const ref5 = useRef(null);
	const isInView5 = useInView(ref5);

	const ref6 = useRef(null);
	const isInView6 = useInView(ref6);

	const hideScrollbar = css`
		::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	`;

	return (
		<PageLayout>
			<Hero />
			<Grid templateColumns='1fr 3fr' overflowY='hidden' px={BASE_PADDING}>
				<Flex flexDirection='column' gap='24px'>
					<ActiveText isActive={isInView1}>About Me</ActiveText>
					<ActiveText isActive={isInView2}>My Expertise</ActiveText>
					<ActiveText isActive={isInView3}>Work Experiences</ActiveText>
					<ActiveText isActive={isInView4}>My Projects</ActiveText>
					<ActiveText isActive={isInView5}>Research</ActiveText>
					<ActiveText isActive={isInView6}>Education</ActiveText>
				</Flex>
				<Flex
					flexDirection='column'
					overflowY='auto'
					maxHeight='100vh'
					gap='128px'
					css={hideScrollbar}
				>
					<Flex flex={1} ref={ref1}>
						<AboutMe />
					</Flex>
					<Flex flex={1} ref={ref2}>
						<Skills />
					</Flex>
					<Flex flex={1} ref={ref3}>
						<AboutMe />
					</Flex>
					<Flex flex={1} ref={ref4}>
						<Skills />
					</Flex>
					<Flex flex={1} ref={ref5}>
						<AboutMe />
					</Flex>
					<Flex flex={1} ref={ref6}>
						<AboutMe />
					</Flex>
				</Flex>
			</Grid>
		</PageLayout>
	);
}
