import { Tooltip, TooltipProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type CustomTooltipProps = TooltipProps & {
	label: string;
	children: ReactNode;
};

const CustomTooltip: FC<CustomTooltipProps> = ({ label, children, ...props }) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Tooltip label={label} hasArrow arrowSize={12} bg='custom-green' color='black' {...props}>
			{children}
		</Tooltip>
	);
};

export default CustomTooltip;
