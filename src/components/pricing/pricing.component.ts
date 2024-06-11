import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PricingItem, PricingItemComponent } from './pricing-item/pricing-item.component';
import { TranslationPipe } from '@likdan/studyum-core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    PricingItemComponent,
    TranslationPipe
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
    'pricing_includes_user_management',
    'pricing_includes_user_permissions',
    'pricing_includes_user_schedule',
    'pricing_includes_user_journal',
    'pricing_includes_user_customer_support',
  ];

  pricingItems: PricingItem[] = [
    {
      period: 'pricing_period_quarter',
      price: '$100',
      totalPerYear: '$400',
      highlight: false,
      includes: this.includes,
    },
    {
      period: 'pricing_period_semester',
      price: '$175',
      totalPerYear: '$350',
      discount: '12.5%',
      highlight: false,
      includes: this.includes,
    },
    {
      period: 'pricing_period_annually',
      price: '$300',
      totalPerYear: '$300',
      discount: '25%',
      highlight: true,
      includes: this.includes,
    },
  ];
}
