import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//my modules
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//my components
import { PostsComponent } from './components/posts/posts.component';
import { CategoriesComponent } from './components/categories/categories.component'

//my services
import { PostService } from './services/post.service'
import { CategoryService } from './services/category.service'
import { TagService } from './services/tag.service'

//toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

//routing
import { RouterModule , Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes=[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'post', component: PostsComponent},
  {path: 'category', component: CategoriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    CategoriesComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService,CategoryService,TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
