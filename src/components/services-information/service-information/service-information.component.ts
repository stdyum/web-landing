import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslationPipe } from '@likdan/studyum-core';

export interface ServiceInformation {
  name: string,
  description: string,
  image: string,
}

@Component({
  selector: 'app-service-information',
  standalone: true,
  imports: [TranslationPipe],
  templateUrl: './service-information.component.html',
  styleUrl: './service-information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceInformationComponent {
  service = input<ServiceInformation>()
}
