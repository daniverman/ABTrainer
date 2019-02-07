import {ExeSrvs} from '../srvs/exeSrvs';
import {Body} from './muscle';
import {ExeCard} from './exeCard';

export class Program {
  exe_Sets_List = [];
  body: Body;
  programId = '';
  exeSrvs;


  constructor(id) {
    this.programId = id;
    this.body = new Body();
  }

  add_exe(exe, sets) {
      this.exe_Sets_List.push([exe, sets]);
  }

  remov_exe(exeId) {
    this.exe_Sets_List.forEach((item, indx) => {
      if (item[0].id === exeId) {
        this.exe_Sets_List.splice(indx, 1);
      }
    });
  }

  updateMuscleImpact(muscleId, impactPrec, exe_id, repeats) {
    this.body.update_muscle(muscleId, impactPrec, exe_id, repeats);

  }
}
