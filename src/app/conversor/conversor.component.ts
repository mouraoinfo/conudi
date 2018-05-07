import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

 
  @Input()
  metros = null;

  quilometros = null;

  ngOnInit() {
    this.quilometros = this.metros/1000;
  }

  
  
}
