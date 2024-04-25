import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-used-technologies-list',
  standalone: true,
  imports: [
    MatIcon,
  ],
  templateUrl: './used-technologies-list.component.html',
  styleUrl: './used-technologies-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsedTechnologiesListComponent {

}
