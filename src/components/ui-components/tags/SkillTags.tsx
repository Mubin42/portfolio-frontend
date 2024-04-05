import useCustomColor from '@/hooks/useCustomColor';
import { Tag, TagProps, useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';

type SkillTagsProps = TagProps & {
	children: React.ReactNode;
};

const SkillTags: FC<SkillTagsProps> = ({ children, ...props }) => {
	// hooks
	const [isDesktop] = useMediaQuery('(min-width: 1024px)');
	const { customGreen } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Tag
			p={{ base: '4px 12px', lg: '8px 20px' }}
			fontSize={{ base: 12, lg: 20 }}
			userSelect='none'
			cursor='pointer'
			borderRadius='36px'
			bg='transparent'
			color='white'
			border='1px solid'
			borderColor={customGreen}
			_hover={isDesktop ? { bgColor: customGreen, color: 'black' } : {}}
			transition={'all 0.3s ease'}
			{...props}
		>
			{children}
		</Tag>
	);
};

export default SkillTags;
