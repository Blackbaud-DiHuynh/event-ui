import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../shared/EventService';
import { Event } from '../shared/Event';
import { EventSubmissionService } from '../shared/EventSubmissionService';
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
                private eventSubmissionService: EventSubmissionService) { }

    public ngOnInit(): void {
        this.getAllEvents();

        this.modalSubscription = this.eventSubmissionService.result.subscribe(
            result => {
                this.getAllEvents();
            }
        );
    }

    private getAllEvents(): void {
        this.eventService.getAllEvents().subscribe(
            retrievedEvents => {
                this.events = retrievedEvents;
            },
            error => {
                console.log(error);
            }
        );
    }
}
