import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  resetSearch,
  searchEmployees,
} from 'projects/state/src/lib/employee.actions';
import { EmployeeState } from 'projects/state/src/lib/employee.reducer';
import { Observable } from 'rxjs';
import { selectSearchResults } from 'projects/state/src/lib/employee.selectors';
import { Employee } from 'projects/state/src/lib/employee.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults$: Observable<Employee[]>;
  isData?: boolean;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ employees: EmployeeState }>
  ) {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
    this.searchResults$ = this.store.select(selectSearchResults);
  }

  ngOnInit() {}

  onSearch() {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    this.store.dispatch(searchEmployees({ searchTerm }));
  }
  reset() {
    this.isData = false;
    this.store.dispatch(resetSearch());
  }
}
