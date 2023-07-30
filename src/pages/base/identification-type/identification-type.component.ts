import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-identification-type',
  templateUrl: './identification-type.component.html',
  styleUrls: ['./identification-type.component.scss']
})
export class IdentificationTypeComponent {
  constructor(private translate: TranslateService) { }
  title = ''
  ngOnInit(): void {
    this.translate.get("search").subscribe((res: string) => {
      this.title = res;
    });
  }
}
