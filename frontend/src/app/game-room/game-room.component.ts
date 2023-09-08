import { Component } from '@angular/core';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent {
  ticket: any
  ngOnInit() {
    this.loadGameTable()
  }

  generateGameTable() {
    
  }

  loadGameTable() {
    this.ticket = [
      [9, 21, 8, 4, 7],
      [5, 20, 25, 10, 3],
      [19, 23, 24, 1, 12],
      [22, 18, 17, 2, 15],
      [16, 13, 14, 11, 6]
    ]
  }
}
