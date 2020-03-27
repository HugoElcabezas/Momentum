import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children: [
      // feed
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
          }
        ]
      },
      // search
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
          }
        ]
      },
      // create
      {
        path: 'create',
        children: [
          {
            path: '',
            loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
          }
        ]
      },
      // conversations
      {
        path: 'conversations',
        children: [
          {
            path: '',
            loadChildren: () => import('./conversations/conversations.module').then( m => m.ConversationsPageModule)
          }
        ]
      },
      // profile
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
          },
          {
            path: 'post/:postId',
            loadChildren: () => import('./post-detail/post-detail.module').then( m => m.PostDetailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
