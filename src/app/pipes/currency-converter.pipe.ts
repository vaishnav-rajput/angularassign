import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  private exchangeRate: number = 84;

  transform(value: number, ...args: unknown[]): string {
    if(!value) return '';
    const rupeeValue = value * this.exchangeRate;
    return `₹${rupeeValue.toFixed(2)}`;
  }

}
