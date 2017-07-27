import { Component, Input } from '@angular/core';
import { SkyModalService } from '@blackbaud/skyux/dist/modules/modal';
import { Event } from '../shared/Event';

@Component({
    selector: 'buy-link-button',
    templateUrl: './buy-link-button.component.html'
})
export class BuyLinkButtonComponent {
    @Input()
    public event: Event;
    constructor(private modal: SkyModalService) {}
}