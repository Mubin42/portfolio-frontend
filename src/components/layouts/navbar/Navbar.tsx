import { navIcons } from '@/lib/sample-data/NavBarIcons';
import { Flex, Text, useTheme } from '@chakra-ui/react';
import React, { FC } from 'react';
import NavbarIcon from './NavbarIcon';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { BASE_PADDING, Z_INDEX } from '@/lib/constants';
import useCustomColor from '@/hooks/useCustomColor';
import Link from 'next/link';
import CustomColorMenu from '@/components/ui-components/menus/CustomColorMenu';

const Navbar: FC = () => {
	// hooks

	const { darkBackground, customGreen } = useCustomColor();

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
				background: customGreen,
				transformOrigin: '0%',
			}}
		/>
	);

	const name = (
		<Link href='/'>
			<Flex
				fontSize={{ base: '16px', lg: '24px' }}
				fontWeight='700'
				_selection={{ color: 'custom-green' }}
				gap={{ base: 1, lg: 4 }}
				align='center'
			>
				{/* <Text hideBelow='lg' color={customGreen} fontWeight='800'>{`< />`}</Text> */}
				<Text>Kazi Ehsanul Mubin</Text>
			</Flex>
		</Link>
	);

	const icon = (
		<Flex align='center' gap={{ base: '12px', lg: '18px' }}>
			<CustomColorMenu />
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
			bg='rgba(0, 0, 0, 0.5)'
			backdropFilter='blur(16px)'
			px={BASE_PADDING}
			style={{ paddingTop: paddingY, paddingBottom: paddingY }}
			zIndex={Z_INDEX.navbar}
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
