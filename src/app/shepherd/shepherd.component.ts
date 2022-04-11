import { Component, AfterViewInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { steps, defaultStepOptions } from '../data';

@Component({
  selector: 'shepherd',
  templateUrl: './shepherd.component.html',
  styleUrls: ['./shepherd.component.css'],
})
export class ShepherdComponent implements AfterViewInit {
  constructor(private shepherdService: ShepherdService) {}

  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    // this.shepherdService.addSteps(steps);
    this.shepherdService.start();
  }
}
