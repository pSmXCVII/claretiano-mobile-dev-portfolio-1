import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface UserDetails {
  id: number;
  user: string;
  password: string;
}

interface RedirectOptions {
  pathWhenAuthenticated?: string;
  pathWhenUnauthenticated?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: string = sessionStorage.getItem('user') || '';
  private availableUserList: Array<UserDetails> = [
    { id: 1, user: 'patrick', password: 'patrick123' },
    { id: 2, user: 'joao', password: 'joao123' },
    { id: 3, user: 'maria', password: 'maria123' },
  ];

  constructor(private router: Router) {}

  login(user: string, password: string): string | undefined {
    const foundedUser = () => {
      return this.availableUserList.find(
        (item) => item.user.toLocaleLowerCase() === user.toLocaleLowerCase()
      );
    };
    const canProceed = () => {
      return password === foundedUser()?.password;
    };

    if (canProceed()) {
      this.loggedUser = user;
      sessionStorage.setItem('user', user);
      this.router.navigate(['/myspace']);
      return undefined;
    } else {
      return 'Usuário não encontrado ou senha inválida';
    }
  }

  logout() {
    try {
      sessionStorage.removeItem('user');
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  getLoggedUser(): string {
    return this.loggedUser;
  }

  isAuthenticated(redirectTo?: RedirectOptions): boolean {
    const hasLoggedUser = !!this.loggedUser;
    if (hasLoggedUser && redirectTo?.pathWhenAuthenticated) {
      this.router.navigate([redirectTo?.pathWhenAuthenticated]);
    }
    if (!hasLoggedUser && redirectTo?.pathWhenUnauthenticated) {
      this.router.navigate([redirectTo?.pathWhenUnauthenticated]);
    }
    return hasLoggedUser;
  }
}
