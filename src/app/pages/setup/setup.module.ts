import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/features/header/header.module';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [SetupComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    HeaderModule,
    SetupRoutingModule,
    DropdownModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
})
export class SetupModule {}
