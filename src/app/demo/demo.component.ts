import { Component, OnInit } from '@angular/core';
import { Animation, BASIC_ANNIMATIONS, ENTRANCES_ANIMATIONS, EXIT_ANIMATIONS, TEXT_ANIMATIONS } from './animations.types';

@Component({
  selector: 'demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {

  entriesAnimations: Animation[] = [...ENTRANCES_ANIMATIONS];
  exitAnimations: Animation[] = [...EXIT_ANIMATIONS];
  basicAnimations: Animation[] = [...BASIC_ANNIMATIONS];
  textAnimations: Animation[] = [...TEXT_ANIMATIONS];

  eleAnimation = 'roll_in_top';
  textAnimation = 'text_focus_in';

  constructor() { }

  ngOnInit() {}

  changeCardAnimation(animation: string) {
    this.eleAnimation = animation;
  }

  changeTextAnimation(animation: string) {
    this.textAnimation = animation;
  }
}
