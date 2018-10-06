import {Category} from "../categories/category";
import {Collection} from "../collections/collection";
import {CONFIG} from "../constants";
import {User} from "../users/user";

export class Text {
  id: number = -1;
  name: string = '';
  epigraph: string = '';
  text: string = '';
  text_date: string = '';
  publish_date: number = 0;
  subscribable: number = 0;
  views: number = 0;
  category: Category = new Category();
  author: User = CONFIG.createEmptyUser();
  collections: Collection[] = [];
}
