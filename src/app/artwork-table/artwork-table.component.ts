import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ARTWORK_DATA } from './artwork-table-datasource';
import { MatTableModule } from '@angular/material/table';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-artwork-table',
  templateUrl: './artwork-table.component.html',
  styleUrls: ['./artwork-table.component.css']
})

export class ArtworkTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'material', 'size'];
  dataSource = new MatTableDataSource(ARTWORK_DATA);

  applyFilter(filterValue: string) {
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
