import { IMAGE_URL } from '@/lib/constants';
import { Flex, Image } from '@chakra-ui/react';
import React, { FC } from 'react';

type ProfileImageProps = {};

const ProfileImage: FC<ProfileImageProps> = ({}) => {
	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Flex justify={{ base: 'center', lg: 'flex-end' }}>
			<Image
				borderRadius='30px'
				border='3px solid'
				borderColor='custom-green'
				src={IMAGE_URL.profileImage}
				alt='profileImage'
				objectFit='contain'
				height={{ base: '356px', lg: '600px' }}
			/>
		</Flex>
	);
};

export default ProfileImage;
