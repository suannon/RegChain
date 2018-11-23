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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for regchain', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be regchain', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('regchain');
    })
  });

  it('network-name should be regchain@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('regchain@0.0.1.bna');
    });
  });

  it('navbar-brand should be regchain',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('regchain');
    });
  });

  
    it('contract component should be loadable',() => {
      page.navigateTo('/contract');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('contract');
      });
    });

    it('contract table should have 7 columns',() => {
      page.navigateTo('/contract');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('adminRegistrar component should be loadable',() => {
      page.navigateTo('/adminRegistrar');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('adminRegistrar');
      });
    });

    it('adminRegistrar table should have 4 columns',() => {
      page.navigateTo('/adminRegistrar');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('registrar component should be loadable',() => {
      page.navigateTo('/registrar');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('registrar');
      });
    });

    it('registrar table should have 4 columns',() => {
      page.navigateTo('/registrar');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('teacher component should be loadable',() => {
      page.navigateTo('/teacher');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('teacher');
      });
    });

    it('teacher table should have 4 columns',() => {
      page.navigateTo('/teacher');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('student component should be loadable',() => {
      page.navigateTo('/student');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('student');
      });
    });

    it('student table should have 11 columns',() => {
      page.navigateTo('/student');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('demoSetUp component should be loadable',() => {
      page.navigateTo('/demoSetUp');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('demoSetUp');
      });
    });
  
    it('creditApproval component should be loadable',() => {
      page.navigateTo('/creditApproval');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('creditApproval');
      });
    });
  
    it('graduateCheck component should be loadable',() => {
      page.navigateTo('/graduateCheck');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('graduateCheck');
      });
    });
  
    it('createContract component should be loadable',() => {
      page.navigateTo('/createContract');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('createContract');
      });
    });
  
    it('deleteContract component should be loadable',() => {
      page.navigateTo('/deleteContract');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('deleteContract');
      });
    });
  

});