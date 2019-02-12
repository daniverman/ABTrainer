import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';
import {ExeCard} from '../../classes/exeCard';
import {ExeSrvs} from '../../srvs/exeSrvs';

@Component({
  selector: 'app-exe-nav',
  templateUrl: './exe-nav.component.html',
  styleUrls: ['./exe-nav.component.css']
})
export class ExeNavComponent implements OnInit, OnChanges {
  @Input() data;
  @Output() messageEvent = new EventEmitter<string>();
  clicked_el;
  toShowCards = [];
  chosenCard: ExeCard;

  constructor(private exeSrvs: ExeSrvs, private render: Renderer2) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const sub_major = changes.data.currentValue;
    this.toShowCards = this.exeSrvs.get_exe_by_sub_major(sub_major);
  }

  click(event) {
    if (this.clicked_el) {
      this.render.setStyle(this.clicked_el, 'border-color', 'black');
      this.render.setStyle(this.clicked_el, 'color', 'black');
    }
    const dirty_id = event.target.id.split('_');
    dirty_id.pop();
    const id = dirty_id.join('_');
    this.chosenCard = this.exeSrvs.get_exe_byId(id);
    this.exeSrvs.set_chosenExe(this.chosenCard);
    this.messageEvent.emit(this.chosenCard.id);
    this.clicked_el = document.getElementById(this.chosenCard.id);
    this.render.setStyle(this.clicked_el, 'border-color', 'red');
    this.render.setStyle(this.clicked_el, 'color', 'red');
  }

}
