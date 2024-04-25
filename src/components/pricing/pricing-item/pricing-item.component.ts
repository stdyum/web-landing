import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

export interface PricingItem {
  period: string,
  price: string,
  totalPerYear: string,
  discount?: string,
  highlight: boolean,
  includes: string[]
}

@Component({
  selector: 'app-pricing-item',
  standalone: true,
  imports: [
    MatIcon,
  ],
  templateUrl: './pricing-item.component.html',
  styleUrl: './pricing-item.component.css',
  host: {
    class: 'accent-container',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingItemComponent {
  pricing = input<PricingItem>();

  private hostRef = inject(ElementRef<HTMLElement>);

  constructor() {
    effect(() => {
      if (this.pricing()?.highlight) {
        this.hostRef.nativeElement.classList.add('highlight');
      } else {
        this.hostRef.nativeElement.classList.remove('highlight');
      }
    });
  }
}
