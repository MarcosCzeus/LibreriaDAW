import { Injectable } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private auth: Auth) { }

register({email, password }: any){
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
}

login({email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
}

loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
}

logout(){
    return signOut(this.auth);
}
}