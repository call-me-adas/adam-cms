import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'page-public',
  template: '<router-outlet></router-outlet>'
})
export class PublicComponent {
  constructor(private route: ActivatedRoute) {
    // this.translate.setDefaultLang('pl');
    this.route.paramMap.subscribe((params: any) => {
      const lang = params.params.lang;
    });
  }
}
