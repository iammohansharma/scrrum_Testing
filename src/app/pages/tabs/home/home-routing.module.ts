import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [ 
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'quotes',
        loadChildren: () => import('./quotes/quotes.module').then( m => m.QuotesPageModule)
      },
      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
      },
      {
        path: 'opportunities',
        loadChildren: () => import('./opportunities/opportunities.module').then( m => m.OpportunitiesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home/feed',
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
