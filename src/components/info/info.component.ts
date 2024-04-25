import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    MatButton,
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
