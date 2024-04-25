import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BenefitItemComponent } from './benefit-item/benefit-item.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [
    BenefitItemComponent,
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsComponent {

}
