import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './cards/card/card.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ], 
  exports: [
    CardComponent
  ]
})
export class ComponentModule { }
