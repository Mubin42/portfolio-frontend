import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Head from 'next/head';
import { aboutMe } from '@/cms/aboutme';
import { IMAGE_URL } from '@/lib/constants';
import useCustomColor from '@/hooks/useCustomColor';

/**
 * @status Currently In Use
 * @keywords page layout, navbar, footer, main content
 * @description This is the page layout, it contains the navbar, footer and the main content of the page
 * Color is set based on the theme
 */

type PageLayoutProps = {
	children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	// hooks
	const { darkBackground } = useCustomColor();

	// states

	// variables

	// styles
	const style = {
		main: {
			minHeight: 'calc(100vh - 64px)',
			flexDirection: 'column',
			pt: { base: 4, lg: 8 },
			bgColor: darkBackground,
		},
	};

	// functions

	// effects

	// components
	// seo optimization goes here
	const head = (
		<Head>
			<title>Kazi Ehsanul Mubin</title>
			<meta name='description' content={aboutMe.description} />
			<meta name='keywords' content='Keywords, for, SEO' />
			<meta name='author' content='Kazi Ehsanul Mubin' />
			<meta property='og:title' content='Kazi Ehsanul Mubin' />
			<meta property='og:description' content={aboutMe.description} />
			<meta property='og:image' content={IMAGE_URL.profileImage} />
			<meta property='og:url' content='https://kazi-mubin.vercel.app/' />
			<meta property='og:type' content='Portfolio Website' />
		</Head>
	);

	return (
		<>
			{head}
			<Navbar />
			<Flex as='main' sx={style.main} scrollSnapType='y mandatory'>
				{children}
			</Flex>
			<Footer />
		</>
	);
};

export default PageLayout;
