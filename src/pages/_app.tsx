import { getLayout } from '@/components/layout';
import { SEO, type SEOProps } from '@/components/seo';
import '@/styles/tw.css';
import { type NextComponentType, type NextPageContext } from 'next';
import { type AppProps } from 'next/app';
import { type ReactNode } from 'react';

interface Props extends AppProps<SEOProps> {
    Component: NextComponentType<NextPageContext, any, SEOProps> & {
        getLayout?: (page: ReactNode) => JSX.Element | null;
    } & SEOProps;
}

const App = ({ Component, pageProps }: Props) => {
    const getFinalLayout = Component.getLayout || getLayout;

    return (
        <>
            <SEO
                title={pageProps.title ?? Component.title}
                desc={pageProps.desc ?? Component.desc}
                img={pageProps.img ?? Component.img}
            />
            {getFinalLayout(<Component {...pageProps} />)}
        </>
    );
};

export default App;
