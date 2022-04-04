import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  board: string [][] = [
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
    ['', '', '','','','','','','',''],
  ];
  
  currentMove: string = 'x';
  onePlayerPopUp: boolean = false;

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

  placeXon(i: number, j:number): void {
    console.log('poziv funkcije');
    this.board[i][j] = this.currentMove;
    if(this.currentMove === 'x') {
      this.currentMove = 'o';
    }
    else {
      this.currentMove = 'x';
    }
  }

  openOnePlayerPopUp(): void {
    this.onePlayerPopUp = true;
  }


}

