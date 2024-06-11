import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilderComponent, FormConfig, sendHttpRequestAndSubscribe } from '@likdan/form-builder-core';
import { Buttons, Controls } from '@likdan/form-builder-material';
import { Validators } from '@angular/forms';
import { TranslationPipe, TranslationService } from '@likdan/studyum-core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormBuilderComponent,
    TranslationPipe,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  private translation = inject(TranslationService);

  config = <FormConfig<any>>{
    controls: {
      name: {
        label: this.translation.getTranslation('register_form_name'),
        type: Controls.textInput,
        validators: [Validators.required],
      },
      studyPlaceName: {
        label: this.translation.getTranslation('register_form_study_place_name'),
        type: Controls.textInput,
        validators: [Validators.required],
      },
      email: {
        label: this.translation.getTranslation('register_form_email'),
        type: Controls.textInput,
        validators: [Validators.required, Validators.email],
      },
      plan: {
        label: this.translation.getTranslation('register_form_plan'),
        additionalFields: {
          searchable: false,
          items: computed(() => [
            { value: 'quarter', display: this.translation.getTranslation('register_form_plan_quarter')() },
            { value: 'semester', display: this.translation.getTranslation('register_form_plan_semester')() },
            { value: 'annually', display: this.translation.getTranslation('register_form_plan_annually')() },
          ]),
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
      buttonText: this.translation.getTranslation('register_form_submit'),
      onSubmit: sendHttpRequestAndSubscribe({
        method: 'POST',
        url: '/api/studyplaces/v1/applications',
        sendOnInvalidValidation: false,
      }),
    },
  };
}
