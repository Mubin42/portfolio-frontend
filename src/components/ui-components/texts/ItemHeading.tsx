import { Heading, HeadingProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type ItemHeadingProps = HeadingProps & {
	children: React.ReactNode;
};

const ItemHeading: FC<ItemHeadingProps> = ({ children, ...props }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Heading fontSize={{ base: '20px', lg: '36px' }} fontWeight='600' {...props}>
			{children}
		</Heading>
	);
};

export default ItemHeading;
