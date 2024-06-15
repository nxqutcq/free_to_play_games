import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  GithubAuthProvider,
} from 'firebase/auth'

import { auth } from '@/firebase/firebase'

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  return result
}

export const doSignOut = () => {
  return auth.signOut()
}

export const doSendEmailVerification = () => {
  if (auth.currentUser) {
    sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/`,
    })
  } else {
    console.log('No user is currently signed in.')
  }
}

export const doSignInWithGitHub = async () => {
  const provider = new GithubAuthProvider()
  const result = await signInWithPopup(auth, provider)
  return result
}
