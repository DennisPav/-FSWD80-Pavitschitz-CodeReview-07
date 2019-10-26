import { Component, OnInit } from '@angular/core';
import { DestinationService } from "../shared/destination.service";
@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
    destinationArray =[];
    showDeletedMessage : boolean;
    searchText:string = "";
    
  constructor(private destinationService: DestinationService) { }

   ngOnInit() {
      this.destinationService.getDestination().subscribe(
      (list) => {
          this.destinationArray = list.map((item) => {
              return {
                  $key : item.key,
                  ...item.payload.val()
              }
          })
      })
  }
       onDelete($key){
            if(confirm("Are you sure you want to delete this record?")){
       this.destinationService.deleteDestination($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }
    filterCondition(destination){
     return destination.location.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
         destination.country.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
         destination.night.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
         destination.price.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
         
    }

}




