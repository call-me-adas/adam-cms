import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-public',
  template: '<router-outlet></router-outlet>'
})
export class PublicComponent {
  constructor(private translate: TranslateService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: any) => {
      const lang = params.params.lang;
      this.translate.use(lang);
    });
  }
}
