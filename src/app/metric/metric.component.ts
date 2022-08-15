import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {
  @Input('name') name = 'ST';
  @Input('data') data: number[]=[1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
