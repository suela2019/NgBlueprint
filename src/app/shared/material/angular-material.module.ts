import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from '@angular/material/list';


const AngularMaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialComponents
  ],
  exports:[
    AngularMaterialComponents
  ]
})
export class AngularMaterialModule { }
