import styles from './Gallery.module.scss';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import GalleryPhoto, { GalleryPhotoData } from './GalleryPhoto'

export default function Gallery() {
    const [photos, setPhotos] = useState<GalleryPhotoData[]>([]);
    useEffect(() => {
        (async () => {
            const db = getFirestore();
            const response = await getDocs(collection(db, 'photos'));
            setPhotos(response.docs.map(doc => ({
                ...doc.data() as GalleryPhotoData,
                id: doc.id,
            })));
        })();
    }, []);

    return <div className={styles.gallery}>
        {photos.map(photo => <GalleryPhoto key={photo.id} {...photo} />)}
    </div>
}
