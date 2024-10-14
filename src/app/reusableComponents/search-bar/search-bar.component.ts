import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  searchFor!: string ;

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchFor)
  }

}
