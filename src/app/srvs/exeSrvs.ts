import {Injectable} from '@angular/core';
import {ExeCardCollection, ExeCard} from '../classes/exeCard';

@Injectable({providedIn: 'root'})
export class ExeSrvs {
  exeCollection = new Map();
  chosenExe: ExeCard;

  constructor() {
    this.exeCollection = new ExeCardCollection().cards;
  }

  get_exe_byId(name) {
    const ans = this.exeCollection[name];
    return ans;
  }

  set_chosenExe(exe) {
    this.chosenExe = exe;
  }

  get_chosen_exe() {
    return this.chosenExe;
  }

  get_all_exe() {
    const ans = [];
    for (const key in this.exeCollection) {
      if (this.exeCollection.hasOwnProperty(key)) {
        ans.push(this.exeCollection[key]);
      }
    }
    return ans;
  }

  get_exe_by_major(paramter) {
    const ans = [];
    for (const key in this.exeCollection) {
      if (this.exeCollection.hasOwnProperty(key) && this.exeCollection[key].major === paramter) {
        ans.push(this.exeCollection[key]);
      }
    }
    return ans;
  }

  get_exe_by_sub_major(paramter) {
    const ans = [];
    for (const key in this.exeCollection) {
      if (this.exeCollection.hasOwnProperty(key) && this.exeCollection[key].sub_major === paramter) {
        ans.push(this.exeCollection[key]);
      }
    }
    return ans;
  }

  get_exe_by_assistant(paramter) {
    const ans = [];
    for (const key in this.exeCollection) {
      if (this.exeCollection.hasOwnProperty(key) && this.exeCollection[key].assistant === paramter) {
        ans.push(this.exeCollection[key]);
      }
    }
    return ans;
  }
}
