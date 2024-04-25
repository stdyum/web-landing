import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { InfoComponent } from '../components/info/info.component';
import { UsedTechnologiesComponent } from '../components/used-technologies/used-technologies.component';
import { DescriptionComponent } from '../components/description/description.component';
import { ServicesInformationComponent } from '../components/services-information/services-information.component';
import { BenefitsComponent } from '../components/benefits/benefits.component';
import { PricingComponent } from '../components/pricing/pricing.component';
import { RegisterComponent } from '../components/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButton,
    MatIcon,
    InfoComponent,
    UsedTechnologiesComponent,
    DescriptionComponent,
    ServicesInformationComponent,
    BenefitsComponent,
    PricingComponent,
    RegisterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
