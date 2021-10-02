import { CSSProperties, useEffect, useRef, useState } from 'react'
import { decode } from 'blurhash'
import styles from './Image.module.scss';

interface Props {
    src?: string;
    hash: string;
    alt: string;

    width: number;
    height: number;

    style?: CSSProperties;
    onDimensions?(width: number, height: number): void;
}
export default function Image(
    {src, hash, alt, width, height, style, onDimensions}: Props
) {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    useEffect(() => {
        (async () => {
            const ratio = width / height
            const smallWidth = Math.floor(32 * ratio), smallHeight = 32;

            const decodedHashData = decode(hash, smallWidth, smallHeight);
            const canvas = document.createElement("canvas");

            canvas.width = smallWidth;
            canvas.height = smallHeight;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const imageData = ctx.createImageData(smallWidth, smallHeight);
            imageData.data.set(decodedHashData);
            ctx.putImageData(imageData, 0, 0);
            setImageUrl(canvas.toDataURL());
            canvas.remove();

            if (!src) return;
            const response = await fetch(src).then(e => e.arrayBuffer());
            const image = URL.createObjectURL(
                new Blob([response], { type: 'image/jpeg' })
            );
            setImageUrl(image);
        })();
    }, [src, hash, width, height]);

    const ref = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const input = ref.current;
        if (!input) return;

        const resizeCallback = () => {
            if (!onDimensions) return;
            onDimensions(input.width, input.height);
        }

        const observer = new ResizeObserver(resizeCallback);
        observer.observe(input);
        return () => {
            observer.disconnect();
        }
    }, [imageUrl, onDimensions]);

    if (!imageUrl) {
        return <></>
    }

    return <img
        alt={alt}
        src={imageUrl}
        className={styles.image}
        style={style}
        ref={ref}
    />
}
