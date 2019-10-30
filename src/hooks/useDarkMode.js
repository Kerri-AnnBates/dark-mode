import {useLocalStorage, useEffect} from './useLocalStoage';

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage('darkmode');

    useEffect(() => {
        const bodyEl = document.querySelector('body');
        darkValue ? bodyEl.classList.add('dark-mode') : bodyEl.classList.remove('dark-mode')
    }, [darkValue])

    return [darkValue, setDarkValue];

}