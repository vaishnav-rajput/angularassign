import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  reactiveForm: FormGroup

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null),
      brand: new FormControl(null),
      model: new FormControl(null),
      color: new FormControl(null),
      discount: new FormControl(null),
    })
  }

  onSubmit(){

  }


  

  canExit(){

    const formValues = this.reactiveForm.value;
    const{ title, brand, model, color, discount} = formValues
    if(title || brand || model || color || discount){
    return confirm('you have unsaved changes, Do you want to exit?')
    } else{
      return true
    }
  }

}
