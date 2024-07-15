import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { doc, getDoc, setDoc } from "firebase/firestore";

import { db } from '../firebase';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getFirebaseDetails = async ({ user }: { user: string | undefined }) => {

  const docRef = doc(db, "users", user ?? '');
  const querySnapshot = await getDoc(docRef)

  const newData = querySnapshot.data();
  if (newData) {
    return newData;

  } else {
    return undefined
  }

}

export const createFirebaseDetails = async ({ user }: { user: string }) => {
  const docRef = doc(db, "users", user);
  await setDoc(docRef, { user })
  return true

}