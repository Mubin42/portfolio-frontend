import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Head from 'next/head';

type PageLayoutProps = {
	children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	// hooks

	// states

	// variables

	// styles
	const style = {
		main: {
			minHeight: 'calc(100vh - 64px)',
			flexDirection: 'column',
			gap: 8,
			bgColor: 'background',
		},
	};

	// functions

	// effects

	// components
	const head = (
		<Head>
			<title>Kazi Ehsanul Mubin</title>
		</Head>
	);

	return (
		<>
			{head}
			<Navbar />
			<Flex as='main' sx={style.main}>
				{children}
			</Flex>
			<Footer />
		</>
	);
};

export default PageLayout;
