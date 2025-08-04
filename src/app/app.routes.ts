import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallary } from './gallery/gallary';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: '',component:Home,title:'home' },
    { path: 'home',component:Home,title:'home' },
    { path: 'about',component:About,title:'about' },
    { path: 'gallery',component:Gallary,title:'login' },
    { path: 'contact',component:Contact,title:'contact' },
    { path: '**',component:NotFound,title:'pageNotFound' },
];
