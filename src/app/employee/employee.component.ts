import { Component, OnInit } from '@angular/core';
 import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
value:string;
  constructor(private router:Router,private activate:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activate.snapshot.queryParams['order']);
  }
  GoBack()
  {
    this.router.navigate(['home'],{queryParams: { order: 'popular' }});
  }
}
