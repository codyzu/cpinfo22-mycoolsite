import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'
import {ref, uploadBytes, getDownloadURL, getStorage} from 'firebase/storage'
import app from './firebase'

const db = getFirestore(app);
const storage = getStorage(app);

export default function Profile() {
    const user = useOutletContext()

    const [fileUpload, setFileUpload] = useState()

    function handleFileUploadChange(event) {
        setFileUpload(event.target.files[0])
    }

    async function uploadFile() {
        const imageRef = ref(storage, `images/${fileUpload.name}`)
        const result = await uploadBytes(imageRef, fileUpload)
        console.log('success', result)
        const url = await getDownloadURL(imageRef)
        console.log('url', url)
    }

    console.log('file', fileUpload)

    const [name, setName] = useState('')

    async function getUserDoc() {
        console.log('the user is', user)

        if (!user) {
            return
        }

        const ref = doc(db, 'users', user.uid)
        const userDoc = await getDoc(ref);

        if (!userDoc.exists()) {
            return
        }

        setName(userDoc.data().name)
    }

    useEffect(() => {
        getUserDoc()
    }, [user])

    function handleSave() {
        const ref = doc(db, 'users', user.uid)
        setDoc(ref, {name: name})
    }

    console.log('name', name)
    if (!user) {
        return <div>Please sign in</div>
    }

    return (
        <>
            <div className='flex flex-row gap-3'>
                <input onChange={handleFileUploadChange} type='file' id="file1" name='fileupload' className='rounded-xl bg-blue p-3 text-white' accept="image/*" />
                <button onClick={uploadFile} className='rounded-xl bg-blue p-3 text-white' type='button'>upload</button>
            </div>
            <label>
                Name:
                <input value={name} onChange={event => setName(event.target.value)} className='border-blue border-2 rounded-lg p-2' type="text" />
            </label>
            <button onClick={handleSave} className='grow-0 bg-blue rounded-lg p-2' type='button'>Save</button>
        </>
    )
}