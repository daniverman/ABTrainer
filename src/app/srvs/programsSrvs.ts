import {Injectable} from '@angular/core';
import {ExeCardCollection, ExeCard} from '../classes/exeCard';
import {Program} from '../classes/program';
import {forEach} from '@angular/router/src/utils/collection';
import {Muscle} from '../classes/muscle';
import {ExeSrvs} from './exeSrvs';
import {Observable, ReplaySubject, Subject} from 'rxjs/index';

@Injectable({providedIn: 'root'})
export class ProgramsSrvs {
  programCollection = [];
  idHelper = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  total: Program;
  chosenProgramId = '';
  programChange: Subject<boolean> = new Subject();

  constructor(exeSrvs: ExeSrvs) {
    this.total = new Program('Total');
  }

  get_program_change() {
    return this.programChange.asObservable();
  }

  set_program_change() {
    if (this.programChange) {
      this.programChange.next(false);
    } else {
      this.programChange.next(true);
    }
  }

  add_program(program: Program) {
    this.programCollection.push(program);
    this.updateTotal();
  }

  remove_program(program: Program) {
    this.programCollection.forEach((item, indx) => {
      if (item.programId === program.programId) {
        this.programCollection.splice(indx, 1);
      }
    });
    this.updateId();
    this.updateTotal();
  }

  get_program_by_id(id: string) {
    if (id === 'Total') {
      return this.total;
    } else {
      let ans;
      this.programCollection.forEach(program => {
        if (program.programId === id) {
          ans = program;
        }
      });
      return ans;
    }
  }

  add_exe_to_program(program_id, exe, sets) {
    this.programCollection.forEach(program => {
      if (program.programId === program_id) {
        program.add_exe(exe, sets);
      }
    });
    this.updateTotal();
    this.updateProgramBody(program_id, exe, sets);
  }

  remov_exe_from_program(program_id, exe_id) {
    this.programCollection.forEach(program => {
      if (program.programId === program_id) {
        program.remov_exe(exe_id);
      }
    });
    this.updateTotal();
  }

  createId() {
    return this.idHelper[this.programCollection.length];
  }

  setChosenProgram(id: string) {
    this.chosenProgramId = id;
  }

  private updateTotal() {
    const newTotal = new Program('Total');
    this.programCollection.forEach((program: Program) => {
      const exeList = program.exe_Sets_List;
      exeList.forEach(exe => {
        newTotal.add_exe(exe[0], exe[1]);
      });
      this.total = newTotal;
    });
    this.set_program_change();
  }

  private updateId() {
    this.programCollection.forEach((program, indx) => {
      program.programId = this.idHelper[indx];
    });
  }

  private updateProgramBody(programId, exe: ExeCard, repeats) {

    this.programCollection.forEach(program => {
      if (program.programId === programId) {
        exe.muscle_impact.forEach((impact, muscle) => {
          const muscleId = muscle;
          const impactPrec = impact;
          program.updateMuscleImpact(muscleId, impactPrec, exe.id, repeats);
          this.update_total_body();
        });
      }

    }, this.programCollection);
    this.set_program_change();
  }

  private update_total_body() {
    const newTotal = new Program('Total');
    this.programCollection.forEach((program: Program) => {
      const body = program.body;
      body.muscles.forEach((value, key) => {
        const muscle: Muscle = value;
        const total_impact = muscle.total_percentage;
        const oldImpact = newTotal.body.muscles.get(muscle.id);
        newTotal.body.muscles.set(muscle.id, oldImpact + total_impact);
      });
      this.total = newTotal;
    });
  }
}
