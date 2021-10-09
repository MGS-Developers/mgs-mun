import { useEffect, useMemo, useState } from 'react'

interface Props {
    image: string;
    color: string;
    className?: string;
}
export default function CommitteeLogo(
    {image, color, className}: Props,
) {
    const imagePlaceholder = useMemo(() => {
        const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect fill='${color}' width="10" height="10"/></svg>`);
        return `data:image/svg+xml;utf8,${svg}`;
    }, [color]);

    const [imageUrl, setImageUrl] = useState();
    useEffect(() => {
        (async () => {
            const url = await import('../../assets/committees/' + image + '.png');
            setImageUrl(url.default);
        })();
    }, [image]);

    return <img
        className={className}
        src={imageUrl ?? imagePlaceholder}
        alt="Committee logo"
    />
}
