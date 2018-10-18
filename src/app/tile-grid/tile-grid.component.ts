import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.css'],
})
export class TileGridComponent {
  imageSrc = '';
  imageAlt = '';
  description = '';
  cols = '3';

  /** Based on the screen size, switch from standard to one column per row */
  tiles = [
          { color: '#ccccff', title: 'Block Breaker game', imageSrc: 'assets/block-breaker.jpg', imageAlt: 'Placeholder image'},
          { color: '#cceeff', title: 'eCommerce site', imageSrc: 'https://via.placeholder.com/300x300', imageAlt: 'Placeholder image'},
          { color: '#ffffb3', title: 'Interactive graphs', imageSrc: 'https://via.placeholder.com/300x300', imageAlt: 'Placeholder image'},
          { color: '#ccccff', title: 'Mobile App', imageSrc: 'https://via.placeholder.com/300x300', imageAlt: 'Placeholder image'},
          { color: '#ccccff', title: 'Custom graphics', imageSrc: 'https://via.placeholder.com/300x300', imageAlt: 'Placeholder image'}
          
  ];

  ngOnInit() {
    this.breakpointObserver
    .observe([Breakpoints.XSmall])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = '1';
        console.log("Breakpoint: Handset")
      }
    })
    this.breakpointObserver
    .observe([Breakpoints.Small])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = '2';
        console.log("Breakpoint: Small")
      }
    })
    this.breakpointObserver
    .observe([Breakpoints.Medium])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = '3';
        console.log("Breakpoint: Medium")
      }
    })
    this.breakpointObserver
    .observe([Breakpoints.Large])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = '4';
        console.log("Breakpoint: Large")
      }
    })
    
  }

  constructor(public breakpointObserver: BreakpointObserver) {}
}
