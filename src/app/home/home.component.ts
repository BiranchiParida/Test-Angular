import { Component, OnInit } from '@angular/core';
  import{ ActivatedRoute,Router,Params} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Querystring:string="";
  constructor(private router:ActivatedRoute,private routers:Router) { }

   
  ngOnInit() {
    this.router.paramMap.subscribe((params)=>{
 let id=params.get('order')
 this.Querystring=id;
   alert("hi"+ this.Querystring);
    })
    //this.Querystring=this.router.snapshot.params["order"]
  }
  GoNext()
    {
      
this.routers.navigate(['employee',"desc"])
    }

}
