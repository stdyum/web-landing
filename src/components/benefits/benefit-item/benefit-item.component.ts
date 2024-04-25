import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-benefit-item',
  standalone: true,
  imports: [
    MatIcon,
  ],
  templateUrl: './benefit-item.component.html',
  styleUrl: './benefit-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitItemComponent {

}
