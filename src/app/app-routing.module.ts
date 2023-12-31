import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [
  { path: 'impressum', component: ImpressumComponent },
  { path: '', component: SlideshowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
