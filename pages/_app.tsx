import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from './_layout';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}

export default MyApp;
