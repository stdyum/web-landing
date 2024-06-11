import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ViewportScroller } from '@angular/common';
import { RedirectLinkDirective, TranslationPipe } from '@likdan/studyum-core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    MatButton,
    RedirectLinkDirective,
    TranslationPipe,
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {
  private viewportScroller = inject(ViewportScroller);

  registerStudyPlace(): void {
    this.viewportScroller.scrollToAnchor('register')
  }
}
