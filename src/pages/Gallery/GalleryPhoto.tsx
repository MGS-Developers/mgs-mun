import Image from '../../bits/Image/Image'
import { useEffect, useState } from 'react'
import {getStorage, getDownloadURL, ref} from 'firebase/storage';

export interface GalleryPhotoData {
    id: string;
    hash: string;
    width: number;
    height: number;
    alt: string;
}
export default function GalleryPhoto(
    {id, hash, width, height, alt}: GalleryPhotoData
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

    return <Image
        src={imageSrc}
        hash={hash}
        alt={alt}
        width={width}
        height={height}
        style={{
            gridRow: "auto / span " + (Math.ceil(computedHeight) + 10)
        }}
        onDimensions={(w, h) => {
            setComputedHeight(h);
        }}
    />
}
