import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SystemStatsComponent } from './system-stats/system-stats.component';
@NgModule({
  declarations: [HomeComponent, SystemStatsComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  providers:[]
})
export class HomeModule {}
