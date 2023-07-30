import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ocupation } from 'src/models/catalogs';
import { BaseResponse } from 'src/models/response-catalogs';

@Injectable({
  providedIn: 'root',
})
export class GeneralMethodsService {

  private urlCatalogs: string = '';
  // EXTENTIONS
  private readonly GET_COUNTRIES = '/countries';
  private readonly GET_TYPE_ID = '/identificationTypes';
  private readonly GET_OCUPATIONS = '/occupations';

  constructor(private http: HttpClient) {
    this.urlCatalogs = environment.serverUrlCatalogs;
  }

  async getOccupations(): Promise<BaseResponse> {
    const response$ = this.http.get<{ success: boolean; data: Ocupation[] }>(
      this.urlCatalogs + this.GET_OCUPATIONS,
    );
    const response = await lastValueFrom(response$);
    if (response.success) {
      return { success: true, data: response.data };
    } else {
      return { success: false, data: [] };
    }
  }

}
    // EXAMPLE
    //   async methodExample(): Promise<typeResponse> {
    //     const response$ = this.http.get<typeResponse>(
    //       this.urlCatalogs + this.extention,
    //     );

    //     return await lastValueFrom(response$);
    //   }
