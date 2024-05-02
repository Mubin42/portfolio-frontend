import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import { MdCallMade } from 'react-icons/md';

type ContactMeButtonProps = ButtonProps & {};

const ContactMeButton: FC<ContactMeButtonProps> = ({}) => {
	// api

	// hooks

	// states

	// variables
	const buttonSize = { base: 'sm', lg: 'lg' };

	// styles

	// functions

	// effects

	// components

	return (
		<Link href='#footer'>
			<Button variant='link' size={buttonSize} color='white' rightIcon={<Icon as={MdCallMade} />}>
				Contact Me
			</Button>
		</Link>
	);
};

export default ContactMeButton;
