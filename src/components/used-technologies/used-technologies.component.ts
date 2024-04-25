import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { UsedTechnologiesListComponent } from './used-technologies-list/used-technologies-list.component';

@Component({
  selector: 'app-used-technologies',
  standalone: true,
  imports: [
    MatIcon,
    UsedTechnologiesListComponent,
  ],
  templateUrl: './used-technologies.component.html',
  styleUrl: './used-technologies.component.css',
  host: {
    class: 'secondary-container',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsedTechnologiesComponent {

}
