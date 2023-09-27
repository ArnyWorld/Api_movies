import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit{
  @Input() public movieUrl!:any;
  @Input() public movieAlt!:any;
  public hasLoaded:boolean = false;
  ngOnInit(): void {
    if(!this.movieUrl) throw new Error('Method not implemented.');
  }
  onLoad(){
    this.hasLoaded = true;
  }
}
