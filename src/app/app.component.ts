import { Component, Sanitizer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpAllFileType';
  constructor(
    private http: HttpClient
    ) {
// tslint:disable-next-line: max-line-length
    this.getCss( 'https://ljimageblob.blob.core.windows.net/wayfinder-blob/wayfinder-common/38/webstyles/b95640c0-1522-44bd-ba2c-74dac200b9f6.css?v=1556461993328' );
    this.getPng('http://3.bp.blogspot.com/-s_pNmSw1ncc/UT5Z-fK-hqI/AAAAAAAAAv0/qCtPX3edwAA/s1600/CirculoPistacho4.png' );
    this.getSvg('https://ljrestservice.azurewebsites.net/api/Map/GetSvgMap?returnFor=web&filename=1972-theybuilding.svg' );
  }

// locationMarkerBg
  getCss(path: string) {
    return this.http.get(path, {responseType : 'text'})
    .subscribe((result: any) => {
        const blob = new Blob([result], {type : 'text/css'});
        const url = URL.createObjectURL(blob);
        const fileref: any = document.createElement('link');
        fileref.setAttribute('rel', 'stylesheet');
        fileref.setAttribute('href', url);
        document.getElementsByTagName('head')[0].appendChild(fileref);
    });
  }

  getPng(path: string) {
    return this.http.get(path, {responseType : 'blob'})
    .subscribe((result: any) => {
        const blob = new Blob([result], {type : 'application/png'});
        const url = URL.createObjectURL(blob);
        const fileref: any = document.createElement('img');
        fileref.setAttribute('src', url);
        document.getElementsByTagName('body')[0].appendChild(fileref);
    });
  }
  getSvg(path: string) {
    return this.http.get(path, {responseType : 'blob'})
    .subscribe((result: any) => {
        const blob = new Blob([result], {type : 'image/svg+xml'});
        const url = URL.createObjectURL(blob);
        const fileref: any = document.createElement('img');
        fileref.setAttribute('src', url);
        document.getElementsByTagName('body')[0].appendChild(fileref);
    });
  }
}
