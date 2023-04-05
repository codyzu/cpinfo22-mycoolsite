import { useEffect, useState } from 'react'
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import app from './firebase'
import {Outlet} from 'react-router-dom'


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app)

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser)
  }))

  console.log('user', user)

  return (
    <div className='max-w-screen-lg mx-auto w-full'>
      <div className='flex flex-col items-stretch gap-2'>
        <div className='flex flex-row justify-end gap-3'>
          <div className='w-auto text-2xl font-sans'>{user ? `Hello ${user.email}` : 'Welcome'}</div>
          <button type='button' onClick={
                () => user
                  ? signOut(auth)
                  : signInWithPopup(auth, provider)
                } className='rounded-xl bg-blue p-3 text-white'>{user ? 'Sign Out' : 'Sign In'}</button>
        </div>
        <Outlet context={user} />
      </div>
    </div>
  )
}

export default App
