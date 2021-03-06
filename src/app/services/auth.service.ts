import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any;

  constructor(private afa: AngularFireAuth,
              private navCtrl: NavController) {
    this.afa.authState.subscribe((user) => {
      if (user) {
        this.setUser(user);
        this.navCtrl.navigateRoot(['/tabs/feed']);
      } else {
        this.navCtrl.navigateRoot(['']);
      }
    });
  }

  setUser(user): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  clearUser(): void {
    localStorage.removeItem('user');
    this.user = null;
  }

  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return(user !== null && user !== undefined);
  }

  login(email: string, password: string): void {
    this.afa.auth.signInWithEmailAndPassword(email, password).then((credentials) => {
      console.log(credentials.user);
      this.navCtrl.navigateRoot(['/tabs/feed']);
    }).catch((error) => {
      console.log(error);
    });
  }

  signup(email: string, password: string){
    return this.afa.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(): void {
    this.afa.auth.signOut().then(() => {
      this.clearUser();
      this.navCtrl.navigateRoot(['']);
    }).catch((error) => {
      console.log(error);
    });
  }

}
