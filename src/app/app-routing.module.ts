import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';


const routes: Routes = [
    {

        path: "",component: HomePageComponent

    },

    {

        path:"about",component: AboutPageComponent

    },

    {

        path:"travels",component: DestinationPageComponent

    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

