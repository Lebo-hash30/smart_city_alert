import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'veiw-report',
    loadChildren: () => import('./veiw-report/veiw-report.module').then( m => m.VeiwReportPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then( m => m.AnnouncementsPageModule)
  },
  {
    path: 'facility-booking',
    loadChildren: () => import('./facility-booking/facility-booking.module').then( m => m.FacilityBookingPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'bookings1',
    loadChildren: () => import('./bookings1/bookings1.module').then( m => m.Bookings1PageModule)
  },
  {
    path: 'bookings2',
    loadChildren: () => import('./bookings2/bookings2.module').then( m => m.Bookings2PageModule)
  },
  {
    path: 'bookings3',
    loadChildren: () => import('./bookings3/bookings3.module').then( m => m.Bookings3PageModule)
  },
  {
    path: 'bookings4',
    loadChildren: () => import('./bookings4/bookings4.module').then( m => m.Bookings4PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },  {
    path: 'viewcase',
    loadChildren: () => import('./viewcase/viewcase.module').then( m => m.ViewcasePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
