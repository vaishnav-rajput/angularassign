import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {

  searchFor!: string ;

  @Output() searchTextChanged: EventEmitter<{searchText: string, event: Event}> = new EventEmitter();


  onSearchTextChanged(event: Event){
    this.searchTextChanged.emit({searchText: this.searchFor, event: event})
  }

}
