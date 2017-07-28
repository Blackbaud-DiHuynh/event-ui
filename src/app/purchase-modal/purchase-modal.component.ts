import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/Event';
import { SkyModalInstance } from '@blackbaud/skyux/dist/modules/modal';
import { PurchaseModalContext } from './purchase-modal-context';
import { EventService } from '../shared/EventService';
import { Transaction } from '../shared/Transaction';
import { TransactionService } from '../shared/TransactionService';

@Component({
    selector: 'purchase-modal',
    templateUrl: './purchase-modal.component.html'
})
export class PurchaseModalComponent implements OnInit {
    public event: Event;
    public transaction: Transaction = new Transaction;
    public amount: number;
    public totalAmount: number;
    public notInCart: boolean = true;

    constructor(private modal: SkyModalInstance,
                public context: PurchaseModalContext,
                public eventService: EventService,
                public transactionService: TransactionService) {}

    public ngOnInit(): void {
        this.event = new Event;
        this.eventService.getEvent(this.context.event).subscribe(
            returnedEvent => {
                this.event = returnedEvent;
                this.transaction.ticketId = this.event.tickets[0].id;
                this.transaction.unitPrice = this.event.tickets[0].currentPrice;
            }
        );
    }

    public saveTransaction(): void {
        this.transaction.quantity = this.amount;
        this.transactionService.recordTransaction(this.transaction).subscribe(
            savedTransaction => {
                if (savedTransaction.id) {
                    this.modal.save();
                }
            }
        );
        this.modal.save();
    }

    public calculateTotal(): void {
        this.totalAmount = this.transaction.unitPrice * this.amount;
        this.notInCart = false;
    }
}