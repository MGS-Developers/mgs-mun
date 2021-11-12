import Image from '../../bits/Image/Image'
import { useEffect, useState } from 'react'
import {getStorage, getDownloadURL, ref} from 'firebase/storage';
import styles from './Gallery.module.scss';

export interface GalleryPhotoData {
    id: string;
    hash: string;
    width: number;
    height: number;
    alt: string;
    showAlt: boolean;
}
export default function GalleryPhoto(
    {id, hash, width, height, alt, showAlt}: GalleryPhotoData
) {
    const [imageSrc, setImageSrc] = useState<string>();
    useEffect(() => {
        (async () => {
            const storage = getStorage();
            const downloadUrl = await getDownloadURL(ref(storage, id + '.jpg'));
            setImageSrc(downloadUrl);
        })();
    }, [id]);

    const [computedHeight, setComputedHeight] = useState(0);

    return <div
        className={styles.imageContainer}
        style={{
            gridRow: "auto / span " + (Math.ceil(computedHeight) + 10)
        }}
    >
        <Image
            src={imageSrc}
            hash={hash}
            alt={alt}
            width={width}
            height={height}
            onDimensions={(w, h) => {
                setComputedHeight(h);
            }}
        />

        {showAlt && <div
            className={styles.alt}
            style={{
                top: computedHeight - 40,
            }}
        >
            <p className={styles.altText}>
                {alt}
            </p>
        </div>}
    </div>
}
