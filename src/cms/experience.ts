type Experiences = {
	title: string;
	doc: {
		company: {
			title: string;
			href: string;
		};
		positions: {
			position: string;
			duration: string;
			location?: string;
			items: string[];
		}[];
	}[];
};

export const experiences: Experiences = {
	title: 'Experience',
	doc: [
		{
			company: {
				title: 'Zolo Inc',
				href: 'https://www.linkedin.com/company/zoloinc/',
			},
			positions: [
				{
					position: 'Software Engineer',
					duration: 'June 2024 - Present',
					location: 'Dhaka, BD',
					items: [
						'Design and implement new features for both frontend and backend, including API creation and database management.',
						'Ensure seamless integration between backend services and frontend UI, while maintaining code quality and performance.',
					],
				},
			],
		},
		{
			company: {
				title: 'Thinkcrypt.io',
				href: 'https://thinkcrypt.io',
			},
			positions: [
				{
					position: 'Software Engineer',
					duration: 'Feb 2024 - May 2024',
					location: 'Dhaka, BD',
					items: [
						'Accountable for developing, deploying, and maintaining web applications as well as improving the company coding rulebook and ethics.',
						'Worked developing single and Multi-vendor E-commerce applications, flight, and ticketing, POS and inventory management, CMS and ERP systems.',
					],
				},
				{
					position: 'Jr. Software Engineer',
					duration: 'Jun 2023 - Jan 2024',
					items: [
						'Develop both frontend and backend aspects of web applications using Next.js and Express.js.',
						'Work on diverse features, including improving and extending existing codebases, and undertaking new project development from inception.',
					],
				},
			],
		},
		{
			company: {
				title: 'happycoders.io',
				href: 'https://happycoders.io',
			},
			positions: [
				{
					position: 'Coding Instructor (Part-Time)',
					duration: 'Jun 2022 - Present',
					location: 'Dhaka, BD',
					items: [
						'Teach Python and Scratch Programming, fostering a strong foundation in programming concepts to k2-k12 students.',
						'Taught over 100+ students',
					],
				},
			],
		},
	],
};
