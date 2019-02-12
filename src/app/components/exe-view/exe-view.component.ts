import {Component, OnInit} from '@angular/core';
import {ExeCard} from '../../classes/exeCard';
import {ExeSrvs} from '../../srvs/exeSrvs';
import {EmbedVideoService} from 'ngx-embed-video';
import {Options} from 'ng5-slider';
import {ProgramsSrvs} from "../../srvs/programsSrvs";

@Component({
  selector: 'app-exe-view',
  templateUrl: './exe-view.component.html',
  styleUrls: ['./exe-view.component.css']
})
export class ExeViewComponent implements OnInit {

  private exe: ExeCard;
  private video: any;
  private sets: Number = 0;

  constructor(private exeSrvs: ExeSrvs, private embedService: EmbedVideoService, private programSrvs: ProgramsSrvs) {
  }

  ngOnInit() {
    this.exe = this.exeSrvs.get_chosen_exe();
    this.video = this.embedService.embed(this.exe.video);
  }

  sets_change(value) {
    this.sets = value;
  }

  add() {
    if (this.sets === 0) {
      alert('dont be fool cant add 0 sets.');
      return;
    }
    // check if their is selected program
    const program = this.programSrvs.chosenProgramId;
    if (program === null || program === 'total' || program === '') {
      alert('dont be fool, select Program.');
      return;
    }
    this.programSrvs.add_exe_to_program(program, this.exe, this.sets);
    alert(this.exe.title + 'was add to program : ' + program + '.');
  }

}
