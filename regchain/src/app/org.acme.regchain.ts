import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.regchain{
   export enum status {
      PASSED,
      FAILED,
      ONGOING,
   }
   export class adminRegistrar extends Participant {
      email: string;
      firstName: string;
      lastName: string;
   }
   export class registrar extends Participant {
      email: string;
      firstName: string;
      lastName: string;
   }
   export class teacher extends Participant {
      email: string;
      firstName: string;
      lastName: string;
   }
   export class student extends Participant {
      studentID: string;
      email: string;
      firstName: string;
      lastName: string;
      dateReg: Date;
      dateGrad: Date;
      graduated: boolean;
      credit: number[];
      creditCount: number;
      creditRequire: number;
   }
   export class contract extends Asset {
      contractID: string;
      credit: number;
      status: status;
      studentID: string;
      student: student;
      teacher: teacher;
   }
   export class demoSetUp extends Transaction {
   }
   export class creditApproval extends Transaction {
      student: student;
      contract: contract;
      timeStamp: Date;
   }
   export class graduateCheck extends Transaction {
      student: student;
      timeStamp: Date;
   }
   export class createContract extends Transaction {
      contractID: string;
      credit: number;
      student: student;
      teacher: teacher;
   }
   export class deleteContract extends Transaction {
      contract: contract;
   }
// }
