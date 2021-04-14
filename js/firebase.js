// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxc_n-79XRptAclnBA1Ec5-5dpLTitCYQ",
    authDomain: "espjaret.firebaseapp.com",
    projectId: "espjaret",
    storageBucket: "espjaret.appspot.com",
    messagingSenderId: "211119785674",
    appId: "1:211119785674:web:f252c4189a81b7c7589633"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export function getFirestore(){
// @ts-ignore
  return firebase.firestore();
}
