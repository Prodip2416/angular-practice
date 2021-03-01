import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderImgComponent } from './header-img/header-img.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, HeaderImgComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    HeaderImgComponent
  ]
})
export class HeaderModule { }
