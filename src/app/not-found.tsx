'use client';
import PageLayout from '@/components/layouts/page-layout/PageLayout';
import Section from '@/components/layouts/snapping/Section';
import useCustomColor from '@/hooks/useCustomColor';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function NotFoundPage() {
	const colors = useCustomColor();
	return (
		<PageLayout>
			<Section align='center' bgColor={colors.darkBackground}>
				<Flex align='center' gap={4}>
					<Heading fontSize={{ base: '32px', lg: '64px' }}>404</Heading>
					<Text fontSize={{ base: '16px', lg: '32px' }}>Page not found</Text>
				</Flex>
			</Section>
		</PageLayout>
	);
}
