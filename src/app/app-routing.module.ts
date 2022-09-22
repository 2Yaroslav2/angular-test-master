import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/layouts/main/main.component";


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
        ]
        // loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'not-found',
        pathMatch: 'full',
        loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
