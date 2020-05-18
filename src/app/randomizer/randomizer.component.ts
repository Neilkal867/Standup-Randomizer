import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  constructor() {}
  title = 'THE TEAM OLYMPUS STAND UP RANDOMIZER';
  button = 'ClICK ME TO SEE WHO GOES NEXT';

  whoGoesNext: string;
  arrayLength: number;  
  olympusTeam: string[] = [ 'Aaron' , 'Nathan', 'Henry', 'Neil', 'Nabih', 'Dylan', 'George', 'Keith', 'Sebastian', 'Adam', 'Rox'];

  ngOnInit() { }

  nextPerson() {
    if (this.olympusTeam.length > 0 ) {
      this.arrayLength = this.olympusTeam.length;
      const randomColumn = Math.floor(Math.random() * this.arrayLength);
      this.whoGoesNext = this.olympusTeam[randomColumn];
      delete this.olympusTeam[randomColumn];
      this.olympusTeam.splice(randomColumn, 1);
    } else {
      this.whoGoesNext = 'That is everyone, have a good rest of your day!';
    }
  }
}
