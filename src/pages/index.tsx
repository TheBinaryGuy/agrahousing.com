import { Instagram, Phone } from 'react-feather';

const Index = () => (
    <div className='container mx-auto my-8 flex flex-1 flex-col items-center justify-center gap-6 px-4'>
        <div className='space-y-2 text-center'>
            <h1 className='text-4xl font-bold'>Agra Housing</h1>
            <h2 className='text-lg font-bold'>Real Estate Company</h2>
        </div>
        <div>Purchase · Exchange · Rent · Sale</div>
        <div className='flex flex-col items-center justify-center gap-3'>
            <a
                href='https://instagram.com/AgraHousing'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2'>
                <Instagram size={16} />
                <span className='text-blue-600 underline'>AgraHousing</span>
            </a>
            <a className='flex items-center gap-2' href='tel:+917070808678'>
                <Phone size={16} />
                <span className='text-blue-600 underline'>
                    +91-70-70-808-678
                </span>
            </a>
        </div>
    </div>
);

export default Index;
