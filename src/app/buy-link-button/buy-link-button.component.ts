import { Component, Input } from '@angular/core';
import { SkyModalService } from '@blackbaud/skyux/dist/modules/modal';
import { Event } from '../shared/Event';
import { PurchaseModalContext } from '../purchase-modal/purchase-modal-context';
import { PurchaseModalComponent } from '../purchase-modal/purchase-modal.component';

@Component({
    selector: 'buy-link-button',
    templateUrl: './buy-link-button.component.html'
})
export class BuyLinkButtonComponent {
    @Input()
    public event: Event;

    constructor(private modal: SkyModalService) {}

    public openModal(): void {
        let context = new PurchaseModalContext;
        context.event = this.event;

        let options: any = {
            providers: [{ provide: PurchaseModalContext, useValue: context}]
        };

        options.fullPage = true;

        this.modal.open(PurchaseModalComponent, options);
    }
}