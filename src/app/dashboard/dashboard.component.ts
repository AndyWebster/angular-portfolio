import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  imageSrc = '';
  imageAlt = '';
  description = '';

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { color: '#ccccff', title: 'Block breaker', subtitle: 'Browser game', imageSrc: 'assets/block-breaker.jpg', description: 'A basic arcade game written in javascript and using HTML5 Canvas.', imageAlt: 'Blockbreaker game screenshot', cols: 1, rows: 1 },
          { color: '#cceeff', title: 'Card 2', cols: 1, rows: 1 },
          { color: '#ffffb3', title: 'Card 3', cols: 1, rows: 1 },
          { color: '#ccffe6', title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { color: '#ccccff', title: 'Block breaker', subtitle: 'Browser game', imageSrc: 'assets/block-breaker.jpg', description: 'A basic arcade game written in javascript and using HTML5 Canvas.', imageAlt: 'Blockbreaker game screenshot',  cols: 1, rows: 1 },
        { color: '#cceeff',  title: 'Card 2', cols: 1, rows: 1 },
        { color: '#ffffb3',  title: 'Card 3', cols: 1, rows: 1 },
        { color: '#ccffe6',  title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
