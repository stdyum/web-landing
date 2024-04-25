import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilderComponent, FormConfig, sendHttpRequestAndSubscribe } from '@likdan/form-builder-core';
import { Buttons, Controls } from '@likdan/form-builder-material';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormBuilderComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  config = <FormConfig<any>>{
    controls: {
      name: {
        label: 'Name',
        type: Controls.textInput,
        validators: [Validators.required],
      },
      studyPlaceName: {
        label: 'Study place name',
        type: Controls.textInput,
        validators: [Validators.required],
      },
      email: {
        label: 'Email',
        type: Controls.textInput,
        validators: [Validators.required, Validators.email],
      },
      plan: {
        label: 'Plan',
        additionalFields: {
          searchable: false,
          items: [
            { value: 'quarter', display: 'Quarter' },
            { value: 'semester', display: 'Semester' },
            { value: 'annually', display: 'Annually' },
          ],
        },
        type: Controls.select,
        validators: [Validators.required],
      },
    },
    initialValue: {
      name: '',
      studyPlaceName: '',
      email: '',
      plan: 'annually',
    },
    submit: {
      button: Buttons.Submit.Flat,
      buttonText: 'Submit',
      onSubmit: sendHttpRequestAndSubscribe({
        method: 'POST',
        url: '/api/studyplaces/v1/applications',
        sendOnInvalidValidation: false,
      }),
    },
  };
}
