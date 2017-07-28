import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../shared/EventService';
import { Event } from '../shared/Event';
import { TransactionSubmissionService } from '../shared/EventSubmissionService';
import { SkyModalService } from '@blackbaud/skyux/dist/modules/modal';

@Component({
    selector: 'event-grid',
    templateUrl: './event-grid.component.html'
})
export class EventGridComponent implements OnInit {
    public events: Event[] = [];
    private modalSubscription: Subscription;

    constructor(private eventService: EventService,
                private modal: SkyModalService,
                private transactionSubmissionService: TransactionSubmissionService) { }

    public ngOnInit(): void {
        this.getAllEvents();

        this.modalSubscription = this.transactionSubmissionService.result.subscribe(
            result => {
                this.getAllEvents();
            }
        );
    }

    private getAllEvents(): void {
        this.eventService.getAllEvents().subscribe(
            retrievedEvents => {
                this.events = retrievedEvents;
                this.mapCurrentPrice(retrievedEvents);
            },
            error => {
                console.log(error);
            }
        );
    }

    private mapCurrentPrice(retrievedEvents: Event[]): void {
        for (let i = 0; i < retrievedEvents.length; i += 1) {
            this.events[i].currentPrice = retrievedEvents[i].tickets[0].currentPrice;
        }
    }
}
