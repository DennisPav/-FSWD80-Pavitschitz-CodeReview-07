import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private firebase: AngularFireDatabase) { }
        destinationList: AngularFireList<any>;
    
     form = new FormGroup({
     $key: new FormControl(null),
     location: new FormControl('', Validators.required),
     country: new FormControl('', Validators.required),
     type: new FormControl('', Validators.required),
     lodging: new FormControl('', Validators.required),
     image: new FormControl('', Validators.required),
     price: new FormControl('', Validators.required),
     night: new FormControl('', Validators.required),
     desc: new FormControl('', Validators.required)
         });
    
  getDestination(){
      this.destinationList = this.firebase.list('destination');
      return this.destinationList.snapshotChanges();
         }
  insertDestination(destination){
      this.destinationList.push({
                location: destination.location,
                country: destination.country,
                type: destination.type,
                lodging: destination.lodging,
                image: destination.image,
                price: destination.price,
                night: destination.night,
                desc: destination.desc
            });
         }
  populateForm(destination){
      this.form.setValue(destination);
        }
    
  updateDestination(destination){
            this.destinationList.update(destination.$key,{
                location: destination.location,
                country: destination.country,
                type: destination.type,
                lodging: destination.lodging,
                image: destination.image,
                price: destination.price,
                night: destination.night,
                desc: destination.desc
            });
        }
  deleteDestination($key: string){
            this.destinationList.remove($key);
  }
    
    








        

}



