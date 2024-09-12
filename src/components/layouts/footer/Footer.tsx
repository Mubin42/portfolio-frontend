import SendAMessageButton from '@/components/ui-components/buttons/SendAMessageButton';
import { IMAGE_URL } from '@/lib/constants';
import { Center, Flex, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

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
		<Flex flex={1} flexDir='column'>
			<Flex
				bgImage={IMAGE_URL.footerImage}
				backgroundSize='cover'
				backgroundRepeat='no-repeat'
				py='32px'
				id='footer'
			>
				<Center flexDirection='column' flex={1} gap={{ base: '32px', lg: '64px' }} py='32px'>
					<Stack align='center' spacing={-2}>
						<Text>Seems interesting?</Text>
						<Text fontSize='40px'>{`Let’s Talk`}</Text>
					</Stack>
					<SendAMessageButton />
				</Center>
			</Flex>
			<Flex flex={1} py={2} bgColor='black' justify='center' align='center'>
				<Text fontSize='14px'>{`© 2024 All rights reserved. Kazi Ehsanul Mubin`}</Text>
			</Flex>
		</Flex>
	);
};

export default Footer;
