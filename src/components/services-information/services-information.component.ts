import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceInformation, ServiceInformationComponent } from './service-information/service-information.component';
import { TranslationPipe } from '@likdan/studyum-core';

@Component({
  selector: 'app-services-information',
  standalone: true,
  imports: [
    ServiceInformationComponent,
    TranslationPipe
  ],
  templateUrl: './services-information.component.html',
  styleUrl: './services-information.component.css',
  host: {
    class: 'secondary-container',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesInformationComponent {
  services: ServiceInformation[] = [
    {
      name: 'services_users_title',
      description: 'services_users_text',
      image: 'pictures/services/users.jpg'
    },
    {
      name: 'services_schedule_title',
      description: 'services_schedule_text',
      image: 'pictures/services/schedule.jpg'
    },
    {
      name: 'services_journal_title',
      description: 'services_journal_text',
      image: 'pictures/services/journal.jpg'
    },
  ];
}
