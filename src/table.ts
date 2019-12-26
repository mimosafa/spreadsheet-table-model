import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { Keys } from './keys';

export class Table {

  private sheet: Spreadsheet.sheet;

  private range: Spreadsheet.range;

  private keys: Keys;

  private rowsStatic: any[][];

  private rowsDynamic: any[][];

  constructor(sheet: Spreadsheet.sheet) {
    this.init(sheet);
  }

  private init(sheet: Spreadsheet.sheet): this {
    this.range = sheet.getDataRange();
    const values = this.range.getValues();
    this.keys = new Keys(values.shift());
    this.rowsStatic = values;
    this.rowsDynamic = JSON.parse(JSON.stringify(this.rowsStatic));
    return this;
  }

  getRowArray(i: number): any[] {
    if (i > -1 && i < this.keys.length) {
      return this.rowsDynamic[i];
    }
    return [];
  }

}
