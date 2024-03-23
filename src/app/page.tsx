'use client';
import AboutMe from '@/components/about-me/AboutMe';
import Hero from '@/components/hero/Hero';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import Skills from '@/components/skills/Skills';
import { BASE_PADDING } from '@/lib/constants';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
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
				<Flex flexDirection='column'>
					<Text color={isInView1 ? 'green' : 'white'}>About Me</Text>
					<Text color={isInView2 ? 'green' : 'white'}>About Me</Text>
					<Text color={isInView3 ? 'green' : 'white'}>About Me</Text>
					<Text color={isInView4 ? 'green' : 'white'}>About Me</Text>
					<Text color={isInView5 ? 'green' : 'white'}>About Me</Text>
				</Flex>
				<Flex
					flexDirection='column'
					overflowY='auto'
					maxHeight='100vh'
					gap='64px'
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
				</Flex>
			</Grid>
		</PageLayout>
	);
}
