import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationPipe } from '@likdan/studyum-core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [
    TranslationPipe
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {

}
