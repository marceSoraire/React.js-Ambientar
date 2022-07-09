import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC05D5DSvz6xMil8AVxG7NHOhmcW-EWssQ",
  authDomain: "ambientar-7eae8.firebaseapp.com",
  projectId: "ambientar-7eae8",
  storageBucket: "ambientar-7eae8.appspot.com",
  messagingSenderId: "113391676450",
  appId: "1:113391676450:web:c9800d6bd1c435aec0ae7b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);