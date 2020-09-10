import { Component, OnInit } from '@angular/core';
import { IntentoryService } from '../service/intentory.service';
import { Router } from '@angular/router';
import { Item } from '../item/item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items:Item[]
  updateItem:Item
  errorMessage='invalid quantity change';
  count;
  total;
  i;
  invalidLogin=false
  constructor(private intentoryService:IntentoryService,private router:Router) { }

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  ngOnInit() {
    this.calcultePrice();

    // console.log(this.intentoryService)
  }
  goShopping(){
    this.router.navigate(['inventory'])
  }
  changeQuantity(item){
    

    this.count=document.getElementById(item.id)['value']
    if(this.count>item.quantity){
      this.invalidLogin=true

    }else{
      
      this.invalidLogin=false
  
      console.log(this.count)
      for(this.i=0;this.i<this.intentoryService.itemSelected.length;this.i++){
        if(this.intentoryService.itemSelected[this.i].id==item.id){
          console.log(this.count)
        this.intentoryService.itemSelected[this.i].count=this.count
         console.log(this.intentoryService.itemSelected)
         break
        }
    }
   }
   this.calcultePrice();
  }


  sendEmail(){
    for(this.i=0;this.i<this.intentoryService.itemSelected.length;this.i++){
      this.intentoryService.itemSelected[this.i].quantity=this.intentoryService.itemSelected[this.i].quantity
      -this.intentoryService.itemSelected[this.i].count;
      this.intentoryService.itemSelected[this.i].count=0;
      this.updateItem=this.intentoryService.itemSelected[this.i];
      console.log(this.updateItem)

      this.intentoryService.updateItem(this.updateItem.id,this.updateItem).subscribe(
        response=>{
          
          this.router.navigate([''])
          }
          )
    }
   

  }
  calcultePrice(){
    this.total=0;
    this.items=this.intentoryService.itemSelected
    for(this.i=0;this.i<this.intentoryService.itemSelected.length;this.i++){
      this.total= this.total+(this.intentoryService.itemSelected[this.i].count)*(this.intentoryService.itemSelected[this.i].price);
    }
   document.getElementById("checkout").innerHTML="Total price is $" + this.total;
   console.log(this.intentoryService.itemSelected)
  }
}
