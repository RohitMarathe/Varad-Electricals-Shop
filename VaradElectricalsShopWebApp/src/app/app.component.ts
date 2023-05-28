import { Component, OnInit, ViewChild } from '@angular/core';
import { BillingServiceService } from './Sevices/billing-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IBillDiary } from './Models/Interfaces/IBillDiary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'VaradElectricalsShopWebApp';
  billingData!: IBillDiary[];
  displayedColumns: string[] = ['number', 'name', 'quantity', 'rate', 'amount'];
  clickedRows = new Set<IBillDiary>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service:BillingServiceService) {
    this.service.getBillingData().subscribe((res) => {
      this.billingData = res;
    });
  }

  ngOnInit() {}

  // applyFilter(event: Event) {
  //   let searchedValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = searchedValue.trim().toLowerCase();
  // }
}
