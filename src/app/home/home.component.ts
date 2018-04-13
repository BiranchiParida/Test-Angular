import { Component, OnInit } from '@angular/core';
  import{ ActivatedRoute,Router,Params} from '@angular/router'
   import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Querystring:string="";
  constructor(private router:ActivatedRoute,private routers:Router,private service:HomeService) { }

   
  ngOnInit() {
  
  }
     
  
  GoNext(value,valu2)
    {
      this.service.GetData(value,valu2).
      subscribe((data)=>
      this.Querystring=data)
    // this.routers.navigate(['employee',value])
    }
    GoGet()
    {
      alert(this.Querystring)
    }

}
