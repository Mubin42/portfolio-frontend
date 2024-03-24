import { useTheme } from '@chakra-ui/react';

type ColorType = {
	customGreen: string;
};

const useCustomColor = (): ColorType => {
	// hooks
	const theme = useTheme();

	const customGreen = theme.colors['custom-green'];

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const colors: ColorType = {
		customGreen,
	};

	return colors;
};

export default useCustomColor;
