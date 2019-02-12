import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';
import {MuscleCard} from '../../classes/muscleCard';
import {MuscleCardSrvs} from '../../srvs/muscleCardSrvs';

@Component({
  selector: 'app-sub-body-nav',
  templateUrl: './sub-body-nav.component.html',
  styleUrls: ['./sub-body-nav.component.css']
})
export class SubBodyNavComponent implements OnInit, OnChanges {
  @Input() data;
  @Output() messageEvent = new EventEmitter<string>();
  clicked_el;
  toShowCards = [];
  chosenCard: MuscleCard;

  constructor(private muscleCardSrvs: MuscleCardSrvs, private render: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const muscle_group = changes.data.currentValue;
    this.toShowCards = this.muscleCardSrvs.get_exe_by_type('sub_group').filter(value => value.group === muscle_group);
  }

  ngOnInit() {
  }

  click(event) {
    if (this.clicked_el) {
      this.render.setStyle(this.clicked_el, 'border-color', 'black');
      this.render.setStyle(this.clicked_el, 'color', 'black');
    }
    const dirty_id = event.target.id.split('_');
    dirty_id.pop();
    const id = dirty_id.join('_');
    this.chosenCard = this.muscleCardSrvs.get_muscle(id);
    this.messageEvent.emit(this.chosenCard.id);
    this.clicked_el = document.getElementById(this.chosenCard.id);
    this.render.setStyle(this.clicked_el, 'border-color', 'red');
    this.render.setStyle(this.clicked_el, 'color', 'red');
  }

}
