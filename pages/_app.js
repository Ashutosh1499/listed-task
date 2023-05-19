import '@next-auth/styles/globals.css';
import { Montserrat } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps, session }) {
	return (
		<main className={montserrat.className}>
			<SessionProvider session={session}>
				<Component {...pageProps} />;
			</SessionProvider>
		</main>
	);
}
