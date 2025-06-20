import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastWordCap',
  pure: true,
})
export class LastWordCapPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const words = value.split(' ');
    const lastIndex = words.length - 1;

    words[lastIndex] = words[lastIndex].toUpperCase();

    return words.join(' ');
  }
}
