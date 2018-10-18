import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', ],
})
export class AboutComponent {
  imageSrc = '';
  imageAlt = '';
  description = '';
  cols = '2';

  /** Based on the screen size, switch from standard to one column per row */
  tiles = [
          { color: '#ddccff', title: 'Solutions', description: 'Whether its an e-commerce site, a sophisticated mobile app or a simple marketing website, we can develop a custom solution to suit you.'},
          { color: '#ddccff', imageSrc: 'assets/scalableVectorGraphics/solutions.svg', imageAlt: 'Placeholder image'},
          { color: '#9966ff', title: 'Flexibility', description: 'We create full sites from scratch, refactor and add features existing sites and design fully fledged apps for mobile.'},
          { color: '#9966ff', imageSrc: 'https://via.placeholder.com/300x300', imageAlt: 'Placeholder image'},
          { color: '#ddccff', title: 'Custom graphics', description: 'We design graphic images for your site that can express your brand in a way that words cannot.'},
          { color: '#ddccff', imageSrc: 'https://via.placeholder.com/300x300', imageAlt: 'Placeholder image'}
  ];

  ngOnInit() {
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = '1';
        console.log("Breakpoint: Handset")
      }
    })
  }

  constructor(public breakpointObserver: BreakpointObserver) {}
}
