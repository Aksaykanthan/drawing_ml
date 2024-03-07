// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYLZDEM1AfzSPYlgUBhn3V-OyujxQ2oIw",
  authDomain: "drawer-ml.firebaseapp.com",
  projectId: "drawer-ml",
  storageBucket: "drawer-ml.appspot.com",
  messagingSenderId: "1010028204648",
  appId: "1:1010028204648:web:00ced3b87d82b72ed2e1dd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const colRef = collection(db,"data")


export  function saveData(data){
  print(data)
}

