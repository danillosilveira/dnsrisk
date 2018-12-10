import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './home/register/register.component'

const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{ path: 'register', component: RegisterComponent },
			{ path: 'register/:id', component: RegisterComponent },
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
