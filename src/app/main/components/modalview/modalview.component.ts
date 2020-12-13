import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.component.html',
  styleUrls: ['./modalview.component.scss'],
})
export class ModalviewComponent implements OnInit {

  constructor(private popoverController:PopoverController) { }

  ngOnInit() {}

}




