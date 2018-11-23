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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { contractService } from './contract.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  providers: [contractService]
})
export class contractComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  contractID = new FormControl('', Validators.required);
  credit = new FormControl('', Validators.required);
  status = new FormControl('', Validators.required);
  studentID = new FormControl('', Validators.required);
  student = new FormControl('', Validators.required);
  teacher = new FormControl('', Validators.required);

  constructor(public servicecontract: contractService, fb: FormBuilder) {
    this.myForm = fb.group({
      contractID: this.contractID,
      credit: this.credit,
      status: this.status,
      studentID: this.studentID,
      student: this.student,
      teacher: this.teacher
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.servicecontract.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.acme.regchain.contract',
      'contractID': this.contractID.value,
      'credit': this.credit.value,
      'status': this.status.value,
      'studentID': this.studentID.value,
      'student': this.student.value,
      'teacher': this.teacher.value
    };

    this.myForm.setValue({
      'contractID': null,
      'credit': null,
      'status': null,
      'studentID': null,
      'student': null,
      'teacher': null
    });

    return this.servicecontract.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'contractID': null,
        'credit': null,
        'status': null,
        'studentID': null,
        'student': null,
        'teacher': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.acme.regchain.contract',
      'credit': this.credit.value,
      'status': this.status.value,
      'studentID': this.studentID.value,
      'student': this.student.value,
      'teacher': this.teacher.value
    };

    return this.servicecontract.updateAsset(form.get('contractID').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.servicecontract.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.servicecontract.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'contractID': null,
        'credit': null,
        'status': null,
        'studentID': null,
        'student': null,
        'teacher': null
      };

      if (result.contractID) {
        formObject.contractID = result.contractID;
      } else {
        formObject.contractID = null;
      }

      if (result.credit) {
        formObject.credit = result.credit;
      } else {
        formObject.credit = null;
      }

      if (result.status) {
        formObject.status = result.status;
      } else {
        formObject.status = null;
      }

      if (result.studentID) {
        formObject.studentID = result.studentID;
      } else {
        formObject.studentID = null;
      }

      if (result.student) {
        formObject.student = result.student;
      } else {
        formObject.student = null;
      }

      if (result.teacher) {
        formObject.teacher = result.teacher;
      } else {
        formObject.teacher = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'contractID': null,
      'credit': null,
      'status': null,
      'studentID': null,
      'student': null,
      'teacher': null
      });
  }

}
