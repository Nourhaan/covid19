import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../../services/api-requests.service';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-search',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchClicked  = false;
  searchRes;
  constructor(private apiService: ApiRequestsService) { }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe(res => {
      console.log("All Countires\n",res);
    });

    
  }
  search(country){
    this.apiService.getCountry(country).subscribe(res => {
      console.log(res);
      this.searchRes = res;
      this.searchClicked = true;
    });
  }

}
