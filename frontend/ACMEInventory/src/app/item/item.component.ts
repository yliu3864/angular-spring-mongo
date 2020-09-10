import { Component, OnInit } from '@angular/core';
import { IntentoryService } from '../service/intentory.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


export class Item{
  constructor(
    public id:number,
    public title: String,
    public price: number,
    public quantity: number,
    public description:String,
    public count:number,
  ){ }
}


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  i;
  flag=false;
  items:Item[]
  public itemSelect:Item[]=[]
  closeResult: string;
  addMessage='add success';
  errerMessage="Not Avaible";
  usccessMessage=false;
  constructor(private intentoryService:IntentoryService,private router:Router,private modalService:NgbModal) { }

  ngOnInit() {
    this.refreshTodos()
  }
  refreshTodos(){
    this.intentoryService.retrieveAllItems().subscribe(
      response=>{
        console.log(response)
        this.items=response;
        this.itemSelect=this.intentoryService.itemSelected
        console.log(this.intentoryService.itemSelected)
      }
    )
  }
  goCart(){
    this.router.navigate(['cart'])
    
    console.log(this.intentoryService.itemSelected)


  }
  addCart(id){
    if(this.intentoryService.itemSelected!=null){
      for(this.i=0;this.i<this.intentoryService.itemSelected.length;this.i++){
        if(this.intentoryService.itemSelected[this.i].id==id){
         this.flag=true
         this.intentoryService.itemSelected[this.i].count+=1
         this.intentoryService.itemSelected[this.i].quantity-=1
         console.log(this.intentoryService.itemSelected)
         break
        }
      }
     
      if(this.flag){
        
      }else{
        this.items[id-1].count+=1
        this.itemSelect.push(this.items[id-1]);
        
        this.intentoryService.itemSelected=this.itemSelect
        console.log(this.intentoryService.itemSelected)
        this.flag=false;
      }
    }else{
      this.itemSelect.push(this.items[id-1]);
     
      this.itemSelect[0].count+=1
      this.itemSelect[0].quantity-=1
      this.intentoryService.itemSelected=this.itemSelect
      console.log(this.intentoryService.itemSelected)
    }
    
    

    
   
    
    // console.log(this.intentoryService.itemSelected)
 
    this.usccessMessage=true

  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
