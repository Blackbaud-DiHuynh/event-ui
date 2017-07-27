import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/Event';
import { SkyModalInstance } from '@blackbaud/skyux/dist/modules/modal';
import { PurchaseModalContext } from './purchase-modal-context';
import { EventService } from '../shared/EventService';

@Component({
    selector: 'purchase-modal',
    templateUrl: './purchase-modal.component.html'
})
export class PurchaseModalComponent implements OnInit {
    public event: Event;
    public amount: number;
    public totalAmount: number;
    public notInCart: boolean = true;

    constructor(private modal: SkyModalInstance,
                public context: PurchaseModalContext,
                public service: EventService) {}

    public ngOnInit(): void {
        this.event = new Event;
        this.service.getEvent(this.context.event).subscribe(
            returnedEvent => {
                this.event = returnedEvent;
            }
        );
    }

    public calculateTotal(): void {
        console.log('in calculateTotal');
        this.totalAmount = Math.random();
        this.notInCart = false;
    }

    public placeInCart(): void {
        this.notInCart = false;
    }
}