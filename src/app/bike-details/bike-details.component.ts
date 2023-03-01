import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent
{
  constructor(private route: ActivatedRoute,private router: Router){}

  addbike()
  {
    this.router.navigate(['/add-bikes']);

  }
  showbike()
  {
    this.router.navigate(['/list-bikes']);
  }
}
