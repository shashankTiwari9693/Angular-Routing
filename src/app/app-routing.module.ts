import { Injectable,NgModule } from '@angular/core';

//import { RouterModule, Routes } from '@angular/router';

import {Title} from "@angular/platform-browser";

import{

  Routes,

  RouterModule,

  TitleStrategy,

  RouterStateSnapshot,

  RouterState,

} from "@angular/router";

import { BarComponent } from './bar/bar.component';

import { FooComponent } from './foo/foo.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

 

const routes: Routes = [

  {path :"foo", title: "Foo", component: FooComponent},

  {path:"bar", "title": "Bar", component:BarComponent},

  {path:"", redirectTo : "/foo", pathMatch: "full"},

  {path:"**", component: PageNotFoundComponent},

];

 

 

@Injectable()

export class TemplatePageTitleStrategy extends TitleStrategy{

  constructor(private readonly title: Title){

    super();

  }

  override updateTitle(snapshot: RouterStateSnapshot){

    const title = this.buildTitle(snapshot);

    if(title !== undefined){

      this.title.setTitle(`App | ${title}`);

    }

  }

}

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

  providers: [{provide : TitleStrategy, useClass: TemplatePageTitleStrategy}],

})

export class AppRoutingModule { }