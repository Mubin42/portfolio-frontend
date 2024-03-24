import useCustomColor from '@/hooks/useCustomColor';
import { Tag, TagProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type SkillTagsProps = TagProps & {
	children: React.ReactNode;
};

const SkillTags: FC<SkillTagsProps> = ({ children, ...props }) => {
	// hooks
	const { customGreen } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Tag
			p='8px 20px'
			fontSize='20px'
			userSelect='none'
			cursor='pointer'
			borderRadius='36px'
			bg='transparent'
			color='white'
			border='1px solid'
			borderColor={customGreen}
			_hover={{
				bg: customGreen,
				color: 'black',
			}}
			transition={'all 0.3s ease'}
			{...props}
		>
			{children}
		</Tag>
	);
};

export default SkillTags;
