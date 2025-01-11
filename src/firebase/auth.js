import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth";
import {auth} from "./firebase";

export const doCreatUserWithEmailAndPassword= async (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
};
//sign in with google ot email 
export const doSignInWithGoogle = async () => {
const provider = new GoogleAuthProvider();
const result = await signInWithPopup(auth, provider);
result.user;
return result;
};
//to make a sign out
export const doSignOut = () => {
    return auth.signOut();
}
//  to change the password
export const doPasswordChange =(password) => {
    return updatePassword(auth.currentUser, password);
}