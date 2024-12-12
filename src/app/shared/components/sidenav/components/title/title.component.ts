import { Component } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: '<h1 class="text-3xl font-bold mb-4">{{ titleService.getTitle() }}</h1>',
})
export class TitleComponent {
  constructor(protected titleService: TitleService) {}
}
