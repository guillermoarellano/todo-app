import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <hr />
    <footer class="footer text-muted">
      <div class="container">
        <p>TODO app 2020 by Guillermo Arellano</p>
      </div>
    </footer>`,
  styles: [':host { display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
