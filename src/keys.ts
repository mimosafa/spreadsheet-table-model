export class Keys {

  readonly keys: string[];

  readonly length: number;

  constructor(keys: string[]) {
    this.keys = keys;
    this.length = this.keys.length;
  }

  index(key: string): number {
    return this._keys.indexOf(key);
  }

  column(key: string): number {
    return this.index(key) + 1;
  }

}
