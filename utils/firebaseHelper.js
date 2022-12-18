// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyC3XiMSDvLwRfTSNv6R1OkaIhSSd2BgKR8',
    authDomain: 'whatsapp-6fdf0.firebaseapp.com',
    projectId: 'whatsapp-6fdf0',
    storageBucket: 'whatsapp-6fdf0.appspot.com',
    messagingSenderId: '400741699542',
    appId: '1:400741699542:web:30239b5475d2b737ac9e77',
    measurementId: 'G-5G8M1671JM',
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
