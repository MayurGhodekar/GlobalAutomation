import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { AuthService } from '../auth';
import { MessagesService, ContactMessage } from '../messages.service';
import { CommonModule } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private messagesService = inject(MessagesService);

  messages = signal<ContactMessage[]>([]);
  messageToDelete = signal<string | null>(null);

  ngOnInit() {
    this.messagesService.getMessages().subscribe(querySnapshot => {
      if (querySnapshot) {
        const messagesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const timestamp = (data['timestamp'] as Timestamp).toDate();
          return {
            id: doc.id,
            name: data['name'],
            email: data['email'],
            message: data['message'],
            timestamp: timestamp,
          };
        });
        this.messages.set(messagesData);
      }
    });
  }

  requestDelete(messageId: string) {
    this.messageToDelete.set(messageId);
  }

  cancelDelete() {
    this.messageToDelete.set(null);
  }

  confirmDelete(messageId: string) {
    this.messagesService.deleteMessage(messageId).subscribe({
      next: () => {
        this.messages.set(this.messages().filter(m => m.id !== messageId));
        this.messageToDelete.set(null);
      },
      error: (err) => {
        console.error('Error deleting message:', err);
        alert('There was an error deleting the message. Please check the browser console for more details.');
        this.messageToDelete.set(null);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
