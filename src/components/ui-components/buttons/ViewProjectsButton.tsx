import useCustomColor from '@/hooks/useCustomColor';
import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

type ViewProjectsButtonProps = ButtonProps & {};

const ViewProjectsButton: FC<ViewProjectsButtonProps> = ({}) => {
	// api

	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables
	const buttonSize = { base: 'sm', lg: 'lg' };

	// styles

	// functions

	// effects

	// components

	return (
		<Button
			size={buttonSize}
			borderRadius='20px'
			bgColor={customGreen}
			border='2px solid'
			borderColor={customGreen}
			color='black'
			rightIcon={<Icon as={FaArrowCircleDown} />}
			_hover={{ bg: 'black', color: customGreen }}
		>
			View Projects
		</Button>
	);
};

export default ViewProjectsButton;
