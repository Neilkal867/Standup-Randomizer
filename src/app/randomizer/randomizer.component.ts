import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([])
    });
  }

  whoGoesNext: string;
  arrayLength: number;
  form: FormGroup;
  olympusTeam: string[] = [ 'Aaron' , 'Nathan', 'Henry', 'Neil', 'Nabih', 'Dylan', 'George', 'Keith', 'Sebastian', 'Adam', 'Rox'];
  //  olympusTeam: string[];

  Data: Array<any> = [
    { name: 'Aaron', value: 'Aaron' },
    { name: 'Nathan', value: 'Nathan' },
    { name: 'Henry', value: 'Henry' },
    { name: 'Neil',  value: 'Neil' },
    { name: 'Nabih', value: 'Nabih' },
    { name: 'Dylan', value: 'Dylan' },
    { name: 'George', value: 'George' },
    { name: 'Keith', value: 'Keith' },
    { name: 'Sebastian', value: 'Sebastian' },
    { name: 'Adam', value: 'Adam' },
    { name: 'Rox', value: 'Rox' },
  ];



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


  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
  }

}
