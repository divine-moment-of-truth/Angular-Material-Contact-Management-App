import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from '../demo/buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }
