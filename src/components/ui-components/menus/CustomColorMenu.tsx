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
	const style = {
		menuItem: {
			bg: lightBackground,
			color: 'white',
			gap: 2,
			_hover: {
				bg: darkBackground,
			},
		},
	};

	// functions

	// effects

	// components

	return (
		<Menu>
			<MenuButton
				as={Button}
				size='sm'
				rightIcon={<ChevronDownIcon color='white' />}
				bg={lightBackground}
				_hover={{
					opacity: 0.8,
				}}
				_active={{
					bg: 'transparent',
				}}
			>
				<Flex boxSize={4} bgColor='custom-green' borderRadius='full' />
			</MenuButton>
			<MenuList bg={lightBackground} border={lightBackground}>
				<MenuItem sx={style.menuItem}>
					<Flex boxSize={4} bgColor='red' borderRadius='full' />
					Red
				</MenuItem>
				<MenuItem sx={style.menuItem}>
					<Flex boxSize={4} bgColor='orange' borderRadius='full' />
					Orange
				</MenuItem>
				<MenuItem sx={style.menuItem}>
					<Flex boxSize={4} bgColor='blue' borderRadius='full' />
					Blue
				</MenuItem>
				<MenuItem sx={style.menuItem}>
					<Flex boxSize={4} bgColor='cyan' borderRadius='full' />
					Cyan
				</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default CustomColorMenu;
