import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-widget',
  templateUrl: './date-widget.component.html',
  styleUrls: ['./date-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateWidgetComponent implements OnInit {
  @Input() dateTime: string = new Date().toISOString();

  constructor() { }

  ngOnInit(): void {
  }

}
