import useCustomColor from '@/hooks/useCustomColor';
import { SkillTag } from '@/types/SkillTag';
import { Tag, TagLeftIcon, TagProps, useMediaQuery } from '@chakra-ui/react';
import React, { FC } from 'react';

type SkillTagsProps = TagProps & {
	tag: SkillTag;
};

const SkillTags: FC<SkillTagsProps> = ({ tag, ...props }) => {
	// hooks
	const [isDesktop] = useMediaQuery('(min-width: 1024px)');
	const { customGreen, lightBackground } = useCustomColor();

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Tag
			p={{ base: '4px 12px', lg: '6px 18px' }}
			fontSize={{ base: 12, lg: 18 }}
			fontWeight={400}
			userSelect='none'
			color={tag.color}
			bgColor={lightBackground}
			border={`1px solid ${tag.color}`}
			transition={'all 0.3s ease'}
			{...props}
		>
			<TagLeftIcon boxSize={{ base: '12px', lg: '18px' }} as={tag.icon} />
			{tag.title}
		</Tag>
	);
};

export default SkillTags;
