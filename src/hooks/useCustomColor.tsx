import { useTheme } from '@chakra-ui/react';

type ColorType = {
	customGreen: string;
	darkBackground: string;
	lightBackground: string;
};

const useCustomColor = (): ColorType => {
	// hooks
	const theme = useTheme();

	const customGreen = theme.colors['custom-green'];
	const darkBackground = theme.colors.background1;
	const lightBackground = theme.colors.background2;

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const colors: ColorType = {
		customGreen,
		darkBackground,
		lightBackground,
	};

	return colors;
};

export default useCustomColor;
