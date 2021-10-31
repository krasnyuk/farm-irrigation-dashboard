import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressSearchComponent} from './components/address-search/address-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [AddressSearchComponent],
  exports: [AddressSearchComponent],
})
export class AddressSearchModule {
}
