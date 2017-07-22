import { Component, ViewChild } from '@angular/core';
import { Ng2Bs3ModalModule, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  @ViewChild('myFirstModal')
  modal1: ModalComponent;
    
  @ViewChild('mySecondModal')
  modal2: ModalComponent;

  showHeading = true;
  heroes = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];
 
  toggleHeading() {
    this.showHeading = !this.showHeading;
  }
}
