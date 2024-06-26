import useCustomColor from '@/hooks/useCustomColor';
import { Button, ButtonProps, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

type SendAMessageButtonProps = ButtonProps & {};

const SendAMessageButton: FC<SendAMessageButtonProps> = ({ ...props }) => {
	// hooks
	const colors = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Link href='/not-implemented'>
			<Button
				size='lg'
				py='24px'
				px='14px'
				rounded='full'
				border='1px solid'
				borderColor={colors.customGreen}
				bgColor={colors.darkBackground}
				color='white'
				_hover={{}}
				{...props}
			>
				<Flex justify='center' align='center' gap={4}>
					<Text fontSize='16px' fontWeight='300' ml={2}>
						Send a message
					</Text>
					<Icon as={BsArrowUpRightCircleFill} boxSize='32px' color='custom-green' mr={-2} />
				</Flex>
			</Button>
		</Link>
	);
};

export default SendAMessageButton;
