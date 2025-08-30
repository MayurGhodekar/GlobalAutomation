import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private firestoreService = inject(FirestoreService);

  submissionStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  async onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.submissionStatus.set('sending');

    try {
      await this.firestoreService.addContactMessage(
        this.contactForm.value.name!,
        this.contactForm.value.email!,
        this.contactForm.value.message!
      );
      this.submissionStatus.set('success');
      this.contactForm.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      this.submissionStatus.set('error');
    }
  }
}
