import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board: string [][] = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  currentMove: string = 'x';
  gameWon: boolean = false;
  onePlayerPopUp: boolean = false;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  chooseX(): void {
    this.currentMove = 'x';
    this.onePlayerPopUp = false;
  }


  chooseO(): void {
    this.currentMove = 'o';
    this.onePlayerPopUp = false;
  }

  placeItemOn(i: number, j: number): void {
    if (this.board[i][j] !== '') {
      return;
    }
    this.board[i][j] = this.currentMove;
    if (this.appService.checkWinner(this.board)) {
      this.gameWon = true;
      return;
    }

    if (this.currentMove === 'x') {
      this.currentMove = 'o';
    } else {
      this.currentMove = 'x';
    }
  }

  resetBoard(): void {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = '';
      }
    }
  }

  openOnePlayerPopUp(): void {
    this.onePlayerPopUp = true;
  }

}
