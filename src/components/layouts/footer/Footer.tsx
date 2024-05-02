import SendAMessageButton from '@/components/ui-components/buttons/SendAMessageButton';
import { IMAGE_URL } from '@/lib/constants';
import { Button, Center, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Flex
			bgImage={IMAGE_URL.footerImage}
			backgroundSize='cover'
			backgroundRepeat='no-repeat'
			py='32px'
			id='footer'
		>
			<Center flexDirection='column' flex={1} gap={{ base: '32px', lg: '64px' }} pt='32px'>
				<Stack align='center' spacing={-2}>
					<Text>Seems interesting?</Text>
					<Text fontSize='40px'>{`Let’s Talk`}</Text>
				</Stack>
				<SendAMessageButton />
				<Text
					pt={{ base: '16px', lg: '32px' }}
					fontSize='14px'
				>{`© 2024 All rights reserved. Kazi Ehsanul Mubin`}</Text>
			</Center>
		</Flex>
	);
};

export default Footer;
