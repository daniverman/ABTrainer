import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {ProgramsSrvs} from '../../srvs/programsSrvs';
import {Body, Muscle} from '../../classes/muscle';
import {Program} from '../../classes/program';

@Component({
  selector: 'app-bodyview',
  templateUrl: './bodyview.component.html',
  styleUrls: ['./bodyview.component.css']
})
export class BodyviewComponent implements OnInit {
  svg;
  programChange: boolean;

  constructor(private programSrvs: ProgramsSrvs) {
    this.svg = d3.select('svg');
    this.update_body_by_program_body(programSrvs.total.body);
    programSrvs.programChange.subscribe((bool) => {
      const prog: Program = programSrvs.get_program_by_id(programSrvs.chosenProgramId);
      this.update_body_by_program_body(prog.body);
    });


  }

  ngOnInit() {
  }


  update_body_by_program_body(body: Body) {
    body.muscles.forEach((value) => {
      const muscle: Muscle = value;
      const path = this.svg.append('path')
        .attr('style', muscle.area.style)
        .attr('d', muscle.area.d)
        .attr('id', muscle.area.id);
    });
  }
}
