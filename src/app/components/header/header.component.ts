import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  queryTerm:string = "";

  private router = inject(Router);
  submitHandler(){
    this.router.navigate(['/movies'],{queryParams:{q:this.queryTerm}})
  }
}
