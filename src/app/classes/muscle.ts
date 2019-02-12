export class Muscle {
  public area = {
    d: '',
    style: '',
    id: ''
  };
  id = '';
  total_percentage = 0.0;
  exeId_percentage_map = new Map();
  style_arr = [
    ['fill', 'red'], ['stroke', '#000000'], ['stroke-width', '1px'], ['stroke-linecap', 'butt'],
    ['stroke-linejoin', 'miter'], ['stroke-opacity', '1'], ['fill-opacity', '0']];
  private name = '';

  constructor(area, id, name) {
    this.area = area;
    this.id = id;
    this.name = name;
  }

  update_impact(exe_id, precentage) {
    this.exeId_percentage_map.set(exe_id, precentage);
    this.update_total_percentage();

  }

  update_total_percentage() {
    this.total_percentage = 0.0;
    this.exeId_percentage_map.forEach((value, key) => {
      this.total_percentage += value;
    });
    this.update_style('fill-opacity');
  }

  update_style(attr) {
    this.style_arr.forEach(value => {
      if (value[0] === attr) {
        value[1] = this.total_percentage.toString();
      }
    }, this.style_arr);
    this.area.style = this.style_arr_to_string(this.style_arr);
  }

  style_arr_to_string(arr) {
    let style_string = '';
    arr.forEach(data => {
      const name = data[0];
      const value = data[1];
      const to_add = name + ':' + value + ';';
      style_string += to_add;
    });

    return style_string;
  }

}

export class Body {
  muscles = new Map();

  constructor() {
    const upper_chest_area = {
        style: 'fill:red;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:0;',
        d: 'm 468.21136,282.35542 -6.26412,-6.57733 -3.44527,-4.54149 -2.34906,-5.63771 c -2.36876,-4.37239 -1.19331,-5.56548 -4.85469,' +
        '-11.74524 -0.96464,-3.33997 -5.12769,-8.25614 -9.55279,-9.39619 l -21.92444,-6.89053 -9.23958,-3.28867 -17.22634,' +
        '-0.1566 -21.14142,4.07168 c 0.86061,-5.00143 13.74234,-3.97541 2.50565,-14.8773 l 25.36971,0.15661 c 7.63584,' +
        '0.26764 13.28781,1.66892 18.00935,3.60187 l 11.74523,4.38489 16.28673,6.89054 c 2.14024,0.42948 6.78614,2.22053 ' +
        '8.92638,4.69809 2.41535,2.3719 4.52681,5.61519 4.85469,9.23958 1.13603,2.89769 1.93194,3.1534 3.13207,8.29996' +
        ' 0.13903,1.23636 2.90734,6.80026 3.28866,9.7094 1.14843,3.09499 0.73082,8.50877 1.87924,12.05844 z m -219.99542,0 ' +
        '6.26412,-6.57733 3.44527,-4.54149 2.34906,-5.63771 c 2.36876,-4.37239 1.19331,-5.56548 4.85469,-11.74524 0.96464,-3.33997 ' +
        '5.12769,-8.25614 9.55279,-9.39619 l 21.92444,-6.89053 9.23958,-3.28867 17.22634,-0.1566 21.14142,4.07168 c -0.86061' +
        ',-5.00143 -13.74234,-3.97541 -2.50565,-14.8773 l -25.36971,0.15661 c -7.63584,0.26764 -13.28781,1.66892 -18.00935,3.60187 ' +
        'l -11.74523,4.38489 -16.28673,6.89054 c -2.14024,0.42948 -6.78614,2.22053 -8.92638,4.69809 -2.41535,2.3719 -4.52681,5.61519 ' +
        '-4.85469,9.23958 -1.13603,2.89769 -1.93194,3.1534 -3.13207,8.29996 -0.13903,1.23636 -2.90734,6.80026' +
        ' -3.28866,9.7094 -1.14843,3.09499 -0.73082,8.50877 -1.87924,12.05844 z',
        id: 'upper_chest_area'

      }
    ;
    this.muscles['upper_chest'] = new Muscle(upper_chest_area, 'upper_chest', 'Upper Chest');
  }

  get_muscle(muscle_name) {
    return this.muscles[muscle_name];
  }

  update_muscle(muscleId, impactPrec, exe_id, repeats) {
    const muscle: Muscle = this.muscles[muscleId];
    muscle.update_impact(exe_id, impactPrec * repeats);
    muscle.update_total_percentage();
  }
}
