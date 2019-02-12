import {Component, OnInit, ViewChild} from '@angular/core';
import {BodynavComponent} from '../bodynav/bodynav.component';
import {ExeNavComponent} from '../exe-nav/exe-nav.component';
import {SubBodyNavComponent} from '../sub-body-nav/sub-body-nav.component';

@Component({
  selector: 'app-main-body-nav',
  templateUrl: './main-body-nav.component.html',
  styleUrls: ['./main-body-nav.component.css']
})
export class MainBodyNavComponent implements OnInit {
  @ViewChild(BodynavComponent) bodyNav;
  @ViewChild(ExeNavComponent) exeNav;
  @ViewChild(SubBodyNavComponent) subBodyNav;
  chosen_group_muscle_id = '';
  chosen_sub_muscle_id = '';
  chosen_exe_id = '';
  show_exe_view = false;
  show_exe_nav = false;
  show_sub_body_nav = false;

  constructor() {
  }

  ngOnInit() {
  }


  receiveBodyNavClick(id: string) {
    this.show_sub_body_nav = true;
    this.chosen_group_muscle_id = id;
  }

  receiveSubBodyNavClick(id: string) {
    this.show_exe_nav = true;
    this.chosen_sub_muscle_id = id;
  }

  receiveExeNavClick(id: string) {
    this.show_exe_view = true;
    this.chosen_exe_id = id;
  }
}
