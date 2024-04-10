import CustomTooltip from '@/components/ui-components/tooltip/CustomTooltip';
import { NavIconsType } from '@/lib/sample-data/NavBarIcons';
import { Flex, Icon, IconProps, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FC } from 'react';

type NavbarIconProps = IconProps & {
	data: NavIconsType;
};

const NavbarIcon: FC<NavbarIconProps> = ({ data, ...props }) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Link href={data.href} target='_blank'>
			<Flex
				as={motion.div}
				align='center'
				cursor='pointer'
				whileHover={{ scale: [null, 1.3, 1.2] }}
				transition={{ duration: '0.3' }}
			>
				<CustomTooltip label={data.title}>
					<span>
						<Icon as={data.icon} color='white' boxSize={{ base: 4, lg: 6 }} {...props} />
					</span>
				</CustomTooltip>
			</Flex>
		</Link>
	);
};

export default NavbarIcon;
