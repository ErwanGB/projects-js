import { Component } from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  contacts : any = [];

  constructor(){
    this.contacts.push(new Contact(1,"John","Nantes","0123456789"))
    this.contacts.push(new Contact(2,"Jack","Rennes","0123456789"))
    this.contacts.push(new Contact(2,"Paul","Paris","0123456789"))
    this.contacts.push(new Contact(2,"Simon","Auray","0123456789"))
    this.contacts.push(new Contact(2,"Hector","Brest","0123456789"))
  }

  format(contact){
    return contact.id + " - " + contact.name + " - " + contact.address + " - " + contact.phone
  }

  isOdd(contact){
    if(contact.id % 2 == 0){
      return true
    }
  }
  
}
