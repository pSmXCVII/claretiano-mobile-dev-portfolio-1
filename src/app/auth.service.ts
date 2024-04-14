import { Injectable } from '@angular/core';

interface UserDetails {
  id: number;
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedUser: string = '';
  private availableUserList: Array<UserDetails> = [
    { id: 1, user: 'patrick', password: 'patrick123' },
    { id: 2, user: 'joao', password: 'joao123' },
    { id: 3, user: 'maria', password: 'maria123' },
  ];

  constructor() {}

  login(user: string, password: string): boolean {
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
      return true;
    } else {
      return false;
    }
  }

  getLoggedUser(): string {
    return this.loggedUser;
  }
}
