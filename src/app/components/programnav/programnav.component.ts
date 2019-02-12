import {Component, OnInit} from '@angular/core';
import {ProgramsSrvs} from '../../srvs/programsSrvs';
import {Program} from '../../classes/program';

@Component({
  selector: 'app-programnav',
  templateUrl: './programnav.component.html',
  styleUrls: ['./programnav.component.css']
})
export class ProgramnavComponent implements OnInit {

  programs;
  chosenProgramId;
  chosenProgram;

  constructor(private programSrv: ProgramsSrvs) {
  }

  ngOnInit() {
    this.programs = this.programSrv.programCollection;
    this.chosenProgramId = 'Total';
    this.chosenProgram = this.programSrv.get_program_by_id(this.chosenProgramId);
    this.setActive(this.chosenProgramId);
  }


  addProgram(event) {
    if (this.programs.length < 6) {
      this.programSrv.add_program(new Program(this.programSrv.createId()));
    } else {
      alert('cannot create more than 7 programs');
    }
    this.programs = this.programSrv.programCollection;
  }

  program_btn_click(event) {
    this.disableActive(this.chosenProgramId);
    this.chosenProgramId = event.target.id;
    this.chosenProgram = this.programSrv.get_program_by_id(this.chosenProgramId);
    this.setActive(this.chosenProgramId);
  }

  removeProgram(event) {
    if (this.chosenProgramId !== 'Total') {
      this.programSrv.remove_program(this.chosenProgram);
      this.chosenProgram = this.programSrv.get_program_by_id('Total');
      this.chosenProgramId = 'Total';
      this.setActive('Total');
      this.programs = this.programSrv.programCollection;
    }

  }

  private setActive(id) {
    document.getElementById(id).classList.add('active');
    this.programSrv.setChosenProgram(id);
  }

  private disableActive(id: string) {
    document.getElementById(id).classList.remove('active');
  }
}
