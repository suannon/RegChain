/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { contractComponent } from './contract/contract.component';

import { adminRegistrarComponent } from './adminRegistrar/adminRegistrar.component';
import { registrarComponent } from './registrar/registrar.component';
import { teacherComponent } from './teacher/teacher.component';
import { studentComponent } from './student/student.component';

import { demoSetUpComponent } from './demoSetUp/demoSetUp.component';
import { creditApprovalComponent } from './creditApproval/creditApproval.component';
import { graduateCheckComponent } from './graduateCheck/graduateCheck.component';
import { createContractComponent } from './createContract/createContract.component';
import { deleteContractComponent } from './deleteContract/deleteContract.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contract', component: contractComponent },
  { path: 'adminRegistrar', component: adminRegistrarComponent },
  { path: 'registrar', component: registrarComponent },
  { path: 'teacher', component: teacherComponent },
  { path: 'student', component: studentComponent },
  { path: 'demoSetUp', component: demoSetUpComponent },
  { path: 'creditApproval', component: creditApprovalComponent },
  { path: 'graduateCheck', component: graduateCheckComponent },
  { path: 'createContract', component: createContractComponent },
  { path: 'deleteContract', component: deleteContractComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
