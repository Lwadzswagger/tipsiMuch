import { Component, AfterViewInit, Input } from '@angular/core';



@Component({


    moduleId: module.id,
    selector: 'app-google-adsense',
    template: ` <div>
        <ins class="adsbygoogle"
           style="display:block;text-align:center;"
            data-ad-client="ca-pub-2741354936838583"
    [attr.data-ad-slot]="data"
            data-ad-format="auto"></ins>
         </div>
            <br>
  `,

})

export class BannerComponent implements AfterViewInit {
    @Input() data;
    constructor() { }
    ngAfterViewInit() {

        try {
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
        } catch (e) {
            console.error(e);
        }

    }
}
