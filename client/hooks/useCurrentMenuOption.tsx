import { useState, useEffect } from 'react';
import {useRouter} from "next/router";

function useCurrentMenuOption() {
    const { pathname } = useRouter();
    const [currentMenuOption, setCurrentMenuOption] = useState('');

    useEffect(() => {
        switch (pathname) {
            case '/':
                setCurrentMenuOption('Acasa');
                break;
            case '/sex':
                setCurrentMenuOption('Sex');
                break;
            case '/alcool':
                setCurrentMenuOption('Alcool');
                break;
            case '/droguri':
                setCurrentMenuOption('Droguri');
                break;
            default:
                setCurrentMenuOption('');
        }
    }, [pathname]);

    return currentMenuOption;
}

export default useCurrentMenuOption;
