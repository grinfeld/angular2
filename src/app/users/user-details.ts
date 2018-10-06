import {CONFIG} from "../constants";
export class UserDetails {
  email: string = '';
  email_visibility: number = CONFIG.VISIBILITY.HIDDEN;
  facebook_url: string= '';
  facebook_visibility: number = CONFIG.VISIBILITY.HIDDEN;
  google_url: string= '';
  google_visibility: number = CONFIG.VISIBILITY.HIDDEN;
  twitter_url: string= '';
  twitter_visibility: number = CONFIG.VISIBILITY.HIDDEN;
  image: string= '';
  image_visibility: number = CONFIG.VISIBILITY.HIDDEN;
}
