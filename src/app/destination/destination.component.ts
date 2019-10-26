import { Component, OnInit } from '@angular/core';
import { DestinationService } from "../shared/destination.service";

@Component({
 selector: 'app-destination',
 templateUrl: './destination.component.html',
 styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

    constructor(private destinationService: DestinationService) { }
    submitted: boolean;
    formControls = this.destinationService.form.controls;
    showSuccessMessage: boolean;
    
 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.destinationService.form.valid){
         if(this.destinationService.form.get("$key").value == null ){ 
             this.destinationService.insertDestination(this.destinationService.form.value);
            
          }   else {
        this.destinationService.updateDestination(this.destinationService.form.value);
             this.showSuccessMessage =true;
             setTimeout(()=> this.showSuccessMessage=false,3000);               
             this.submitted = false;
             this.destinationService.form.reset();
             }
         }
     }             
}