import { UserDetails } from './user-details';
import {Author} from "./author";
import {CONFIG} from "../constants";


export class User extends Author {
  username: string = '';
  first_name: string = '';
  last_name: string = '';
  password: string = '';
  type: number = CONFIG.ROLES.VISITOR;
  visibility: number = CONFIG.VISIBILITY.NA;
  subscribable: number = 0;
  details: UserDetails = new UserDetails();
  about: string = '';

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
