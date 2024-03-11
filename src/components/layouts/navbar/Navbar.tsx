import { navIcons } from '@/lib/sample-data/NavBarIcons';
import { Flex, Icon, Text, Tooltip, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar: FC = () => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const name = (
		<Text fontSize={{ base: '16px', lg: '24px' }} fontWeight='700'>
			Kazi Ehsanul Mubin
		</Text>
	);

	const icon = (
		<Flex align='center' gap={{ base: '12px', lg: '18px' }}>
			{navIcons?.map((item, index) => (
				<Flex as={Link} key={index} align='center' cursor='pointer' href={item.href}>
					<Tooltip label={item.title} hasArrow bg='gray.300' color='black'>
						<span>
							<Icon as={item.icon} color='white' boxSize={{ base: 4, lg: 6 }} />
						</span>
					</Tooltip>
				</Flex>
			))}
		</Flex>
	);

	return (
		<Flex w='100%' bgColor='background' py='48px' px={{ base: '24px', lg: '128px' }}>
			<Flex flex={1} gap={{ base: '12px', lg: '24px' }} justify='space-between'>
				{name}
				{icon}
			</Flex>
		</Flex>
	);
};

export default Navbar;
