import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useChangeRoute = () => {
    const router = useRouter();

    const changeRoute = useCallback((menuOption) => {
        switch (menuOption) {
            case 'Acasa':
                router.push('/');
                break;
            case 'Sex':
                router.push('/sex');
                break;
            case 'Alcool':
                router.push('/alcool');
                break;
            case 'Droguri':
                router.push('/droguri');
                break;
            default:
                router.push('/');
        }
    }, [router]);

    return [changeRoute];
};

export default useChangeRoute;
