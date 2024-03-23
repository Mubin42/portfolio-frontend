import { navIcons } from '@/lib/sample-data/NavBarIcons';
import { Flex, Text, useTheme } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavbarIcon from './NavbarIcon';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { BASE_PADDING } from '@/lib/constants';

const Navbar: FC = () => {
	// hooks
	const theme = useTheme();

	const green = theme.colors['custom-green'];

	// states

	// variables
	const MotionFlex = motion(Flex);
	const { scrollYProgress } = useScroll();
	const headerY = useTransform(scrollYProgress, [0, 0.05], ['0%', '-100%']);
	const paddingY = useTransform(scrollYProgress, [0, 0.05], ['24px', '8px']);
	const widthX = useTransform(scrollYProgress, [0, 0.05], ['10px', '4px']);

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	// styles

	// functions

	// effects

	// components
	const progress = (
		<motion.div
			className='progress-bar'
			style={{
				scaleX,
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				height: widthX,
				background: green,
				transformOrigin: '0%',
			}}
		/>
	);

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
			px={BASE_PADDING}
			// animate={{ y: headerY }}
			style={{ paddingTop: paddingY, paddingBottom: paddingY }}
		>
			<Flex flex={1} gap={{ base: '12px', lg: '24px' }} justify='space-between'>
				{progress}
				{name}
				{icon}
			</Flex>
		</MotionFlex>
	);
};

export default Navbar;
