import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PricingItem, PricingItemComponent } from './pricing-item/pricing-item.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PricingItemComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  host: {
    class: 'secondary-container',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  includes: string[] = [
    'User management',
    'User permissions',
    'Schedule',
    'Journal',
    'Customer support',
  ];

  pricingItems: PricingItem[] = [
    {
      period: 'Quarter',
      price: '$100',
      totalPerYear: '$400',
      highlight: false,
      includes: this.includes,
    },
    {
      period: 'Semester',
      price: '$175',
      totalPerYear: '$350',
      discount: '12.5%',
      highlight: false,
      includes: this.includes,
    },
    {
      period: 'Annually',
      price: '$300',
      totalPerYear: '$300',
      discount: '25%',
      highlight: true,
      includes: this.includes,
    },
  ];
}
