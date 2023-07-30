import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  constructor(private router: Router, private translate: TranslateService) { }
  title = ''
  currentTab: any = '';
  tabList = [
    { name: "ocupations", action: '/ocupaciones' },
    { name: "countries", action: '/paises' },
    { name: "identifications", action: '/identificaciones' },
  ];

  ngOnInit(): void {
    this.translate.get("risk-catalog").subscribe((res: string) => {
      this.title = res;
    });
    for (const item of this.tabList) {
      this.translate.get(item.name).subscribe((res: string) => {
        item.name = res;
      });
    }
  }

  changePage(action: any): void {
    this.router.navigate([action.action]);
  }
}
