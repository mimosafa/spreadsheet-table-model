class Table {
  //
}

class Keys {
  private _keys: string[];

  constructor(keys: string[]) {
    this._keys = keys;
  }

  keys(): string[] {
    return this._keys;
  }

  length(): Integer {
    return this._keys.length;
  }

  index(key: string): Integer {
    return this._keys.indexOf(key);
  }

  column(key: string): Integer {
    return this.index(key) + 1;
  }
}

class Row {
  //
}
