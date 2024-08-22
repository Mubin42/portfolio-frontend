import useCustomColor from '@/hooks/useCustomColor';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomColorMenuProps = {};

const CustomColorMenu: FC<CustomColorMenuProps> = ({}) => {
	// api

	// hooks
	const { darkBackground, lightBackground } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon color='white' />}
				bg={lightBackground}
				_hover={{
					opacity: 0.8,
				}}
				_active={{
					bg: 'transparent',
				}}
			>
				<Flex boxSize={4} bgColor='custom-green' borderRadius='full'></Flex>
			</MenuButton>
			<MenuList bg={lightBackground} border={lightBackground}>
				<MenuItem bg={lightBackground} color='white'>
					Download
				</MenuItem>
				<MenuItem
					bg={lightBackground}
					color='white'
					_hover={{
						bg: darkBackground,
					}}
				>
					Create a Copy
				</MenuItem>
				<MenuItem bg={lightBackground} color='white'>
					Mark as Draft
				</MenuItem>
				<MenuItem bg={lightBackground} color='white'>
					Delete
				</MenuItem>
				<MenuItem bg={lightBackground} color='white'>
					Attend a Workshop
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default CustomColorMenu;
