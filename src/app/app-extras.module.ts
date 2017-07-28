import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EventService } from './shared/EventService';
import { EventSubmissionService } from './shared/EventSubmissionService';
import { PurchaseModalComponent } from './purchase-modal/purchase-modal.component';
import { SkyModule } from '@blackbaud/skyux/dist/core';
import { TransactionService } from './shared/TransactionService';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SkyModule
  ],
  providers: [
      EventService,
      EventSubmissionService,
      TransactionService
  ],
  entryComponents: [
      PurchaseModalComponent
  ]
})
export class AppExtrasModule { }
