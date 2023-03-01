import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  data?:any;
      adminform ={

      email:'',
      password:''
    }

    constructor(private proserv:ProductService , private route: ActivatedRoute,private router: Router){}

    onsubmit()
    {
    this.data = this.proserv.usr?.filter((m) => m.email === this.adminform.email )

    if(this.data.length>0)
      this.router.navigate(['/home'])

    }
}
