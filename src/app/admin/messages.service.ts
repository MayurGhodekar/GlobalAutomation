import { Injectable, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, getDocs, query } from '@angular/fire/firestore';
import { from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private firestore = inject(Firestore);
  private messagesCollection = collection(this.firestore, 'contactMessages');

  getMessages() {
    const messagesQuery = query(this.messagesCollection);
    return from(getDocs(messagesQuery)).pipe(
      catchError(error => {
        console.error('Error fetching messages:', error);
        return of(null);
      })
    );
  }

  deleteMessage(messageId: string) {
    const docRef = doc(this.firestore, 'contactMessages', messageId);
    return from(deleteDoc(docRef));
  }
}
