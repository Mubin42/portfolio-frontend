'use client';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Add color mode config
const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

// 3. extend the theme
const colors = {
	background: '#121212',
	'custom-green': '#1DB954',
};

const shadows = {};

const components = {
	Text: {
		baseStyle: {
			color: 'white',
		},
	},
	Heading: {
		baseStyle: {
			color: 'white',
		},
	},
};

// 6. Add Breakpoints
const breakpoints = {
	base: '0px',
	sm: '480px',
	md: '768px',
	lg: '992px',
	xl: '1280px',
};

export const theme = extendTheme({
	config,
	colors,
	components,
	breakpoints,
	shadows,
});
