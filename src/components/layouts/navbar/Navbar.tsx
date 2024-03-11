import { navIcons } from '@/lib/sample-data/NavBarIcons';
import { Flex, Text } from '@chakra-ui/react';

import React, { FC } from 'react';
import NavbarIcon from './NavbarIcon';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar: FC = () => {
	// hooks

	// states

	// variables
	const MotionFlex = motion(Flex);
	const { scrollYProgress } = useScroll();
	const headerY = useTransform(scrollYProgress, [0, 0.05], ['0%', '-100%']);
	const paddingY = useTransform(scrollYProgress, [0, 0.05], ['24px', '8px']);

	// styles

	// functions

	// effects

	// components
	const name = (
		<Text
			fontSize={{ base: '16px', lg: '24px' }}
			fontWeight='700'
			_selection={{ color: 'custom-green' }}
		>
			Kazi Ehsanul Mubin
		</Text>
	);

	const icon = (
		<Flex align='center' gap={{ base: '12px', lg: '18px' }}>
			{navIcons?.map((icon, index) => (
				<NavbarIcon key={index} data={icon} />
			))}
		</Flex>
	);

	return (
		<MotionFlex
			as={motion.header}
			position='fixed'
			top={0}
			w='100%'
			bgColor='background'
			px={{ base: '24px', lg: '128px' }}
			animate={{ y: headerY }}
			style={{ paddingTop: paddingY, paddingBottom: paddingY }}
		>
			<Flex flex={1} gap={{ base: '12px', lg: '24px' }} justify='space-between'>
				{name}
				{icon}
			</Flex>
		</MotionFlex>
	);
};

export default Navbar;
