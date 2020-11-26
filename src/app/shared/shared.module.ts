import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatToolbarModule} from '@angular/material/toolbar';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, MatIconModule,TranslateModule, FormsModule,MatToolbarModule,MatCardModule,MatGridListModule],
  exports: [TranslateModule, MatIconModule,WebviewDirective, FormsModule,MatCardModule,MatToolbarModule,MatGridListModule]
})
export class SharedModule {}
