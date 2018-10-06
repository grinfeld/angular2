import {User} from "./user";
import {AuthService} from "../auth.service";
import {CONFIG} from "../constants";

export class AuthUserWrapper {
  user:User = CONFIG.createEmptyUser();
  auth:AuthService;

  constructor(user:User, auth:AuthService) {
      this.user = user;
      this.auth = auth;
  }

  isAdmin(): boolean {
    return this.user.type === CONFIG.ROLES.ADMIN;
  }

  isRegUser(): boolean {
    return this.user.type > CONFIG.ROLES.VISITOR;
  }

  isEditable(): boolean {
    return this.auth.isAdmin() || this.auth.isAuthor(this.user);
  }

  isVisible(): boolean {
    return this.user.visibility != CONFIG.VISIBILITY.HIDDEN;
  }

  config() {
    return CONFIG;
  }
}
