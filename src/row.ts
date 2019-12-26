import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { Table } from './table';
import { Keys } from './keys';

export class Row {

  private table: Table;

  private keys: Keys;

  private values: any[];

  constructor(index: number, table: Table) {
    this.table = table;
    this.keys = Table.keys
  }
}
