import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BenefitItemComponent } from './benefit-item/benefit-item.component';
import { TranslationPipe } from '@likdan/studyum-core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [
    BenefitItemComponent,
    TranslationPipe,
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsComponent {

}
