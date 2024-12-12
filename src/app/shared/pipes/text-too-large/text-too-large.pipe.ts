import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTooLarge',
  standalone: true,
})
export class TextTooLargePipe implements PipeTransform {
  public transform(value?: string, length: number = 40): string {
    if (value === undefined) {
      return '';
    }
    return value.length > length ? `${value.slice(0, length)}...` : value;
  }
}
