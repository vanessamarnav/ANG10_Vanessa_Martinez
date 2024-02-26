import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../core/services/account.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  displayedColumns: string[] = [
    'email',
    'firstName',
    'lastName',
    'phoneNumber',
    'status'
  ];
  dataSource!: MatTableDataSource<User>;
  rowSelected: User | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  display : string = 'none';

  constructor(
    private accountServices: AccountService
  ){

  }
  ngOnInit(): void{
    this.accountServices.getUsers().subscribe(response =>{
      this.dataSource = new MatTableDataSource(response.model)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(row: User){
    this.rowSelected = row;
    console.log('Row selected', row);
    this.display = "block";
  }

  onCloseHandled()
  {
    this.rowSelected = undefined;
    this.display= "none";
  }
 
  
}
