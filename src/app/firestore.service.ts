import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore = inject(Firestore);

  addContactMessage(name: string, email: string, message: string) {
    const messagesCollection = collection(this.firestore, 'contactMessages');
    return addDoc(messagesCollection, { name, email, message, timestamp: new Date() });
  }
}
