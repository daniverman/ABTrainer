import {Component, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {MuscleCard, MuscleCardCollection} from '../../classes/muscleCard';
import {MuscleCardSrvs} from '../../srvs/muscleCardSrvs';

@Component({
  selector: 'app-bodynav',
  templateUrl: './bodynav.component.html',
  styleUrls: ['./bodynav.component.css']
})
export class BodynavComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  clicked_el;
  chosenCard: MuscleCard;
  muscleCardCollection = [];

  constructor(private muscleCardSrvs: MuscleCardSrvs, private render: Renderer2) {
    this.muscleCardCollection = muscleCardSrvs.get_exe_by_type('group');
  }

  ngOnInit() {
  }

  click(event) {
    if (this.clicked_el) {
      this.render.setStyle(this.clicked_el, 'border-color', 'black');
      this.render.setStyle(this.clicked_el, 'color', 'black');
    }
    const id = event.target.id.split('_')[0];
    this.chosenCard = this.muscleCardSrvs.get_muscle(id);
    this.messageEvent.emit(this.chosenCard.id);
    this.clicked_el = document.getElementById(this.chosenCard.id);
    this.render.setStyle(this.clicked_el, 'border-color', 'red');
    this.render.setStyle(this.clicked_el, 'color', 'red');
  }

}
