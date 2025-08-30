
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Wait for the authentication state to be loaded
  await firstValueFrom(authService.user$);

  if (authService.isAuthenticated() && authService.isAdmin()) {
    return true;
  } else {
    if (authService.isAuthenticated()) {
      // If the user is authenticated but not an admin, show a permission denied message
      alert('You do not have permission to access the admin panel.');
    }
    router.navigate(['/admin/login']);
    return false;
  }
};
