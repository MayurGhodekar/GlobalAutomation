import { Injectable, inject, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, user } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ReplaySubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  currentUser = signal<User | null>(null);
  isAdmin = signal(false);
  errorMessage = signal<string | null>(null);
  
  private authStateResolved = new ReplaySubject<User | null>(1);
  user$ = this.authStateResolved.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, async (user) => {
      this.currentUser.set(user);
      if (user) {
        const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
        this.isAdmin.set(userDoc.exists() && userDoc.data()['role'] === 'admin');
      } else {
        this.isAdmin.set(false);
      }
      this.authStateResolved.next(user);
    });
  }

  isAuthenticated(): boolean {
    return !!this.currentUser();
  }

  async login(email: string, password: string): Promise<void> {
    this.errorMessage.set(null);
    try {
      // 1. Sign in the user
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;

      // 2. Explicitly fetch the user's role from Firestore
      const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
      
      // 3. Check if the user is an admin
      if (userDoc.exists() && userDoc.data()['role'] === 'admin') {
        // 4. Update the isAdmin signal and navigate to the admin panel
        this.isAdmin.set(true);
        this.router.navigate(['/admin']);
      } else {
        // 5. If not an admin, log them out and show an error
        this.isAdmin.set(false);
        await signOut(this.auth);
        this.errorMessage.set('You do not have permission to access the admin panel.');
        this.router.navigate(['/admin/login']);
      }
    } catch (error: any) {
      // Handle authentication errors (e.g., wrong password)
      this.errorMessage.set('Invalid email or password. Please try again.');
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/admin/login']);
  }
}
