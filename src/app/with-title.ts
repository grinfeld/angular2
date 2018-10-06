export class WithTitle {
  title:string;
  divider:string = ' > ';
  parts: Title[] = [];

  constructor() {}

  push(part:string, path: string): WithTitle {
    this.parts.push(new Title(part, path));
    return this;
  }

  setTitle(title: string): WithTitle {
    this.title = title;
    return this;
  }

  clear(): WithTitle {
    this.parts = [];
    return this;
  }
}

export class Title {
    constructor(name:string, path:string) {
      this.name = name;
      this.path = path;
    }

    name: string;
    path: string;
}
