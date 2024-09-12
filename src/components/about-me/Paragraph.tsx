import { Text } from '@chakra-ui/react';
import { useScroll } from 'framer-motion';
import { FC, useRef } from 'react';
import Word from './Word';

type ParagraphProps = {
	value: string;
};

const Paragraph: FC<ParagraphProps> = ({ value }) => {
	// hooks

	const wordRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: wordRef,
		offset: ['start 0.9', 'start 0.25'],
	});
	// states

	// variables
	const words = value?.split(' ');

	// styles

	// functions

	// effects

	// components

	return (
		<Text
			ref={wordRef}
			fontSize={{ base: '14px', lg: '28px' }}
			textAlign='justify'
			display='flex'
			flexWrap='wrap'
		>
			{words.map((word, index) => {
				const start = index / words.length;
				const end = start + 1 / words.length;

				return (
					<Word key={index} range={[start, end]} progress={scrollYProgress}>
						{word}
					</Word>
				);
			})}
		</Text>
	);
};

export default Paragraph;
