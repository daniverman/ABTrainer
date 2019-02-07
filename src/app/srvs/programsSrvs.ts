import {Injectable} from '@angular/core';
import {ExeCardCollection, ExeCard} from '../classes/exeCard';
import {Program} from '../classes/program';
import {forEach} from '@angular/router/src/utils/collection';
import {Muscle} from '../classes/muscle';
import {ExeSrvs} from './exeSrvs';

@Injectable({providedIn: 'root'})
export class ProgramsSrvs {
  programCollection = [];
  idHelper = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  total: Program;
  chosenProgramId = '';

  constructor(exeSrvs: ExeSrvs) {
    this.total = new Program('Total');
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
  }

  private updateId() {
    this.programCollection.forEach((program, indx) => {
      program.programId = this.idHelper[indx];
    });
  }

  private updateProgramBody(programId, exe: ExeCard, repeats) {
    let prog;
    this.programCollection.forEach(program => {
      if (program.programId === programId) {
        prog = program;
      }
    });
    exe.muscle_impact.forEach((impact, muscle) => {
      // check what is muscle a key or key value tuple;
      const muscleId = muscle;
      const impactPrec = impact;
      prog.updateMuscleImpact(muscleId, impactPrec, exe.id, repeats);
      this.update_total_body();
    });
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
