import { NgModule } from '@angular/core';
import { EventService } from './shared/EventService';
import { EventSubmissionService } from './shared/EventSubmissionService';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [
      EventService,
      EventSubmissionService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
