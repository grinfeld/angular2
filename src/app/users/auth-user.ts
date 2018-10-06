import {CONFIG} from "../constants";

export class AuthUser {
  id: number = 0;
  username: string = '';
  password: string = '';
  nickname: string = '';
  token: string = '';
  token_expiration: any;
  type: number = CONFIG.ROLES.VISITOR;

  getType():number{
    return this.type;
  }

  isAuthor() : boolean {
    return this.type === CONFIG.ROLES.AUTHOR;
  }

  isAdmin() : boolean {
    return this.type === CONFIG.ROLES.ADMIN;
  }
}
