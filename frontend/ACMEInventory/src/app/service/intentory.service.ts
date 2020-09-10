import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item/item.component';

@Injectable({
  providedIn: 'root'
})
export class IntentoryService {

  constructor(private http:HttpClient) { }
  public itemSelected:Item[]=[]
  retrieveAllItems(){
    return this.http.get<Item[]>("http://localhost:8080/all");
  }
  updateItem(id,updateItem){
    return this.http.put<Item>(`http://localhost:8080/updateId/${id}`,updateItem);
  }
}
