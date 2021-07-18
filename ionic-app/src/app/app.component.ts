import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.initializeApp();
  }

  initializeApp() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }
}
