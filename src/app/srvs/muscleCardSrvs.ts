import {Injectable} from '@angular/core';
import {MuscleCard, MuscleCardCollection} from '../classes/muscleCard';

@Injectable({providedIn: 'root'})
export class MuscleCardSrvs {
  muscleCardCollection = new Map();
  chosenGroupMuscle = [];
  chosenSubGropMusle = [];

  constructor() {
    this.muscleCardCollection = new MuscleCardCollection().cards;
  }

  get_muscle(name) {
    return this.muscleCardCollection[name];
  }

  get_exe_by_major(paramter) {
    const ans = [];
    for (const key in this.muscleCardCollection) {
      if (this.muscleCardCollection.hasOwnProperty(key) && this.muscleCardCollection[key].major === paramter) {
        ans.push(this.muscleCardCollection[key]);
      }
    }
    return ans;
  }

  get_exe_by_sub_major(paramter) {
    const ans = [];
    for (const key in this.muscleCardCollection) {
      if (this.muscleCardCollection.hasOwnProperty(key) && this.muscleCardCollection[key].sub_major === paramter) {
        ans.push(this.muscleCardCollection[key]);
      }
    }
    return ans;
  }

  get_exe_by_group(paramter) {
    const ans = [];
    for (const key in this.muscleCardCollection) {
      if (this.muscleCardCollection.hasOwnProperty(key) && this.muscleCardCollection[key].group === paramter) {
        ans.push(this.muscleCardCollection[key]);
      }
    }
    return ans;
  }

  get_exe_by_type(paramter) {
    const ans = [];
    for (const key in this.muscleCardCollection) {
      if (this.muscleCardCollection.hasOwnProperty(key) && this.muscleCardCollection[key].type === paramter) {
        ans.push(this.muscleCardCollection[key]);
      }
    }
    return ans;
  }
}
