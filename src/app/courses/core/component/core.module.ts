import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations:[
    NavBarComponent,
    NotFoundComponent
  ],
  imports:[
    RouterModule.forChild([
      {
        path: '**',
        component: NotFoundComponent,
      }
    ])
  ]
  ,
  exports:[
    NavBarComponent
  ]
})
export class CoreModule{

}
