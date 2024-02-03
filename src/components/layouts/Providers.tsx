'use client';
import React, { FC } from 'react';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

/**
 * This component is a layout for the Providers, Chakra and Redux(For Future)
 */

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			{children}
		</ChakraProvider>
	);
};

export default Providers;
