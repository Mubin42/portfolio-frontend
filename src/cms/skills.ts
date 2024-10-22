import { SkillTag } from '@/types/SkillTag';
import { FiCode } from 'react-icons/fi';
import { IoLogoNpm } from 'react-icons/io';
import {
	SiChakraui,
	SiExpress,
	SiGit,
	SiGithub,
	SiJavascript,
	SiJsonwebtokens,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from 'react-icons/si';

type Skill = {
	title: string;
	doc: {
		title: string;
		tags: SkillTag[];
	}[];
};

export const skills: Skill = {
	title: 'Skills',
	doc: [
		{
			title: 'Backend Development',
			tags: [
				{
					title: 'TypeScript',
					icon: SiTypescript,
					color: '#3178C6',
				},
				{
					title: 'JavaScript',
					icon: SiJavascript,
					color: '#F7DF1E',
				},
				{
					title: 'NestJs',
					icon: SiNestjs,
					color: '#E0234E',
				},
				{
					title: 'ExpressJs',
					icon: SiExpress,
					color: 'white',
				},
				{
					title: 'Node.js',
					icon: SiNodedotjs,
					color: '#8CC84B',
				},
				{
					title: 'JWT',
					icon: SiJsonwebtokens,
					color: '#D63AFF',
				},
			],
		},
		{
			title: 'Frontend Development',
			tags: [
				{
					title: 'React.js',
					icon: SiReact,
					color: '#61DAFB',
				},
				{
					title: 'Next.js',
					icon: SiNextdotjs,
					color: 'white',
				},
				{
					title: 'Redux & RTK Query',
					icon: SiRedux,
					color: '#764ABC',
				},
				{
					title: 'Chakra UI',
					icon: SiChakraui,
					color: '#319795',
				},
				{
					title: 'Tailwind & Shade/cn',
					icon: SiTailwindcss,
					color: '#38B2AC',
				},
			],
		},
		{
			title: 'Tools',
			tags: [
				{
					title: 'Git',
					icon: SiGit,
					color: '#F05032',
				},
				{
					title: 'GitHub',
					icon: SiGithub,
					color: '#F0F6FC',
				},
				{
					title: 'Heroku',
					icon: SiNestjs,
					color: '#430098',
				},
				{
					title: 'Vercel',
					icon: SiVercel,
					color: 'white',
				},
				{
					title: 'AWS S3',
					icon: SiNodedotjs,
					color: '#FF9900',
				},
				{
					title: 'NPM',
					icon: SiNpm,
					color: '#CB3837',
				},
			],
		},
		{
			title: 'Databases',
			tags: [
				{
					title: 'MongoDB',
					icon: SiMongodb,
					color: '#47A248',
				},
				{
					title: 'MySQL',
					icon: SiMysql,
					color: '#4479A1',
				},
				{
					title: 'PostgreSQL & Prisma',
					icon: SiPostgresql,
					color: '#336791',
				},
			],
		},
		{
			title: 'Miscellaneous',
			tags: [
				{
					title: 'Data Structures',
					icon: FiCode,
					color: 'white',
				},

				{
					title: 'Algorithms',
					icon: FiCode,
					color: 'white',
				},
				{
					title: 'OOP',
					icon: FiCode,
					color: 'white',
				},
				{
					title: 'Functional Programming',
					icon: FiCode,
					color: 'white',
				},
				{
					title: 'Computer Vision',
					icon: FiCode,
					color: 'white',
				},
				{
					title: 'Teaching',
					icon: FiCode,
					color: 'white',
				},
				{
					title: 'MVC',
					icon: FiCode,
					color: 'white',
				},
			],
		},
	],
};
