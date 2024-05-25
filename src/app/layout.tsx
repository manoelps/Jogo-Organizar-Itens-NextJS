import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jogo Organizar Itens',
	description: 'Jogo Organizar Itens'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-[#56BAEC]">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
