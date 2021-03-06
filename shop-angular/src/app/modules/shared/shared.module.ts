import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class SharedModule { }
