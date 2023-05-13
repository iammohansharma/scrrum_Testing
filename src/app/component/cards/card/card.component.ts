import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit,AfterContentChecked {
@Input()appdata:any
data:any
  constructor() { }

  ngOnInit() {}
  ngAfterContentChecked(): void {
    
    this.data = this.appdata
   
}

}
