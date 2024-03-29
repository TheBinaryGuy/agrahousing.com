export interface SEOProps {
    title?: string;
    desc?: string;
    img?: string;
    currentPath?: string;
    rootUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
    rootUrl = process.env.NEXT_PUBLIC_DOMAIN ?? 'agrahousing.com',
    title,
    desc,
    img,
    currentPath = '/',
}) => (
    <>
        <meta
            name='viewport'
            content='minimum-scale=1, width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />

        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

        <meta name='robots' content='index, follow' />

        <meta name='keywords' content='Agra Housing' />
        <meta
            name='description'
            content={desc ?? 'Agra Housing - Real Estate Company.'}
        />

        <meta name='theme-color' content='#4f46e5' />

        <meta
            property='og:description'
            content={desc ?? 'Agra Housing - Real Estate Company.'}
        />
        <meta property='og:type' content='Website' />
        <meta
            property='og:title'
            content={title ? `${title} | Agra Housing` : 'Agra Housing'}
        />
        <meta property='og:url' content={`https://${rootUrl}${currentPath}`} />
        <meta
            property='og:image'
            content={img ?? `https://${rootUrl}/og-image.png`}
        />

        <meta
            name='twitter:description'
            content={desc ?? 'Agra Housing - Real Estate Company.'}
        />
        <meta
            name='twitter:title'
            content={title ? `${title} | Agra Housing` : `Agra Housing`}
        />
        <meta name='twitter:card' content='summary' />

        <title>{title ? `${title} | Agra Housing` : 'Agra Housing'}</title>
    </>
);
