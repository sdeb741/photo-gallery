import {useState, useEffect} from 'react';
import { projectStorage,projectFirestore,timestamp} from '../firebase/config';  //this is used to upload the file in the hook

const useStorage = (file) => {
    const [progress, setProgress] = useState(0); //for the progress of the upload
    const [error, setError] =useState(null); //for any errors from the upload
    const [url, setUrl] = useState(null); //for the image URL that we get back from the storage after we've uploaded it
//once the image is uploaded we have to get the URL  and store that in database and the database will contain a list of all image image URLs and then we can use that data to load the images in a React component






    useEffect(() => {
         
        const storageRef = projectStorage.ref(file.name);  //to get a refernece where the file should be saved......inside the default firebase storage bucket with the proper file name
        const collectionRef=projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err)=>{
            setError(err);
        }, async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt=timestamp()
            collectionRef.add({url,createdAt});
            setUrl(url);
        })
    }, [file]); //this is the dependency....and everytime the dependency changes the funtion inside useEffect is gonna fire

    return{ progress, url, error }
}

export default useStorage;
