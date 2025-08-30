import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  authService = inject(AuthService);

  email = '';
  password = '';

  login() {
    this.authService.login(this.email, this.password);
  }
}
