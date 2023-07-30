import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ocupation',
  templateUrl: './ocupation.component.html',
  styleUrls: ['./ocupation.component.scss']
})
export class OcupationComponent {
  constructor(private translate: TranslateService) { }
  title = ''
  ngOnInit(): void {
    this.translate.get("search").subscribe((res: string) => {
      this.title = res;
    });
  }
}
