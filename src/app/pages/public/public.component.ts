import {Component} from '@angular/core';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-public',
  template: '<router-outlet></router-outlet>'
})
export class PublicComponent {
  constructor(private translate: TranslateService, private route: ActivatedRoute) {
    // this.translate.setDefaultLang('pl');
    this.route.paramMap.subscribe((params: any) => {
      const lang = params.params.lang;
      this.translate.use(lang);
      console.log(this.translate.currentLang);
    });

    translate.onDefaultLangChange.subscribe((event: TranslationChangeEvent) => {
      // do something
      console.log(event);
    });
  }
}
