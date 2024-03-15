'use client';
import AboutMe from '@/components/about-me/AboutMe';
import Hero from '@/components/hero/Hero';
import PageLayout from '@/components/layouts/page-layout/PageLayout';

export default function Home() {
	return (
		<PageLayout>
			<Hero />
			<AboutMe />
		</PageLayout>
	);
}
