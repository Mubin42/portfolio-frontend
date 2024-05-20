'use client';
import AboutMe from '@/components/about-me/AboutMe';
import Experiences from '@/components/experiences/Experiences';
import Hero from '@/components/hero/Hero';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';

/**
 * @description This is the home page, with all the components present here.
 */

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			<AboutMe />
			<Skills />
			<Experiences />
			{/* <Projects /> */}
		</PageLayout>
	);
}
