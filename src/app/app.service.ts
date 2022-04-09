import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  checkRows(board: string[][], sign: string): boolean {
    for (let i = 0; i < 10; i++) {
      let signInARow = 0;
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === sign) {
          signInARow++;
        } else {
          signInARow = 0;
        }
        if (signInARow === 5) {
          return true;
        }
      }
    }
    return false;
  }

  checkColumns(board: string[][], sign: string): boolean {
    for (let j = 0; j < 10; j++) {
      let signInARow = 0;
      for (let i = 0; i < 10; i++) {
        if (board[i][j] === sign) {
          signInARow++;
        } else {
          signInARow = 0;
        }
        if (signInARow === 5) {
          return true;
        }
      }
    }
    return false;
  }

  min(a: number, b: number): number {
    if (a < b) {
      return a;
    }
    return b;
  }

  _min(a: number, b: number, c: number): number {
    return this.min(a, this.min(b, c));
  }

  max(a: number, b: number): number {
    if (a > b) {
      return a;
    }
    return b;
  }

  checkMainDiagonal(board: string [][], sign: string): boolean {
    return false;
  }

  checkOtherDiagonal(board: string[][], sign: string) {
    let n = board[0].length;
    for (let i = 1; i < 2 * n - 1; i++) {
      let start_col = this.max(0, i - n);
      let count = this._min(i, n - start_col, n);
      let numberOfSignsInARow = 0;
      for (let j = 0; j < count; j++) {
        if (board[this.min(n, i) - j - 1][start_col + j] === sign) {
          numberOfSignsInARow++;
        } else {
          numberOfSignsInARow = 0;
        }
        if (numberOfSignsInARow === 5) {
          return true;
        }
      }
    }
    return false;
  }

  checkWinner(board: string[][]): boolean {
    if (this.checkRows(board, 'x')) {
      return true;
    }
    if (this.checkRows(board, 'o')) {
      return true;
    }
    if (this.checkColumns(board, 'x')) {
      return true;
    }
    if (this.checkColumns(board, 'o')) {
      return true;
    }
    if (this.checkMainDiagonal(board, 'x')) {
      return true;
    }
    if (this.checkMainDiagonal(board, 'o')) {
      return true;
    }
    if (this.checkOtherDiagonal(board, 'x')) {
      return true;
    }
    return this.checkOtherDiagonal(board, 'o');

  }

}
