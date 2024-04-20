import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-newgame',
  standalone: true,
  imports: [ ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule ],
  templateUrl: './newgame.component.html',
  styleUrl: './newgame.component.scss'
})
export class NewgameComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router){}

  myForm: FormGroup

  ngOnInit(): void {
    this.myForm = this.fb.group({
      number: [0, Validators.required]
    })
  }


onSubmit(form: FormGroup){
  console.log('Number', form.value.number);
  this.router.navigate(['/start'], { queryParams: { number: form.value.number } })
}

}
