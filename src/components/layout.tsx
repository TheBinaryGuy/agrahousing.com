import { Inter } from '@next/font/google';
import clsx from 'clsx';

const inter = Inter();

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div
        className={clsx(
            'flex min-h-full flex-1 grow flex-col bg-gradient-to-r from-rose-100 to-teal-100',
            inter.className
        )}>
        {children}
    </div>
);

export const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;
