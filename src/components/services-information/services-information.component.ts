import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ServiceInformation, ServiceInformationComponent } from './service-information/service-information.component';

@Component({
  selector: 'app-services-information',
  standalone: true,
  imports: [
    ServiceInformationComponent,
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
      name: 'User management',
      description: 'Studyum offers a comprehensive solution for managing enrollments in study places, providing educators with unparalleled control and flexibility. Through the generation of unique access codes and a robust ban system, instructors can regulate access to their study places efficiently and securely. The platform\'s granular permissions management empowers educators to assign specific privileges to students, such as schedule management or viewing other students\' marks, while the super-admin retains ultimate authority over role management. Additionally, Studyum facilitates collaborative learning by allowing the creation of multiple groups, each with its super-viewer for streamlined oversight. This hierarchical structure enhances administrative efficiency and fosters effective communication and collaboration among students and educators, ensuring a conducive learning environment for all participants.',
      image: 'pictures/services/users.jpg'
    },
    {
      name: 'Schedule',
      description: 'Studyum revolutionizes the concept of study scheduling with its innovative microservices-driven platform. Offering a flexible approach to organizing study places, Studyum allows study places to effortlessly create, customize, and manage schedules tailored to their specific needs. With a variety of viewing options including time-based and table-based formats, users can easily visualize their study plans and make necessary adjustments on the go. Featuring two distinct types of schedules - general and current - Studyum caters to both long-term planning and immediate needs. The general schedule provides consistency over weeks, while the current schedule dynamically generates from the general one, allowing for real-time modifications. Moreover, Studyum maintains a comprehensive history of schedules, enabling users to access and review past schedules for any chosen date. Through its intuitive interface and robust functionality, Studyum empowers users to optimize their study routines with ease and efficiency, ensuring maximum productivity and success in their academic pursuits.',
      image: 'pictures/services/schedule.jpg'
    },
    {
      name: 'Journal',
      description: 'Studyum\'s comprehensive platform not only offers flexible scheduling for study places but also provides a secure journaling feature for teachers to efficiently grade students. With robust security measures in place, only teachers present during the lesson have the authority to mark students, ensuring the integrity of the grading process. Administrators, on the other hand, are granted access solely to view student marks without the ability to make edits, maintaining accountability and transparency within the system. Furthermore, administrators have the capability to create presets within the journal, such as lesson types (e.g., lectures or labs), allowing for dynamic categorization of lessons with their respective grading criteria. Each lesson type operates independently, enabling customized grading parameters tailored to specific educational activities. Additionally, users can generate detailed reports on student absences and activity, providing valuable insights into student performance and engagement. With Studyum\'s user-friendly interface and robust features, educators and administrators alike can streamline their workflows and enhance the overall learning experience for students.',
      image: 'pictures/services/journal.jpg'
    },
  ];
}
