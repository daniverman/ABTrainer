export class ExeCard {
  src = '';
  title = '';
  id = '';
  major = '';
  sub_major = '';
  assistant = '';
  description = {
    about_title: '',
    about_content: [],
  };
  video = '';
  muscles_overall = '';
  muscle_impact = new Map();

  constructor(img, title, id, major, sub_major, description?, video?, assistant?, muscles_overall?) {
    this.src = img;
    this.title = title;
    this.id = id;
    this.major = major;
    this.sub_major = sub_major;
    if (assistant) {
      this.assistant = assistant;
    }
    if (description) {
      this.description = description;
    }
    if (video) {
      this.video = video;
    }
    if (muscles_overall) {
      this.muscles_overall = muscles_overall;
    }
  }
}

export class ExeCardCollection {
  cards = new Map();

  constructor() {
    const benchPress = new ExeCard('./assets/bench_press.png', 'Bench Press', 'bench_press', 'chest', 'upper_chest');
    benchPress.description.about_title = 'Bench Press';
    benchPress.description.about_content = ['fasdfadsf', 'fasdfasdf', 'asdfasdf'];
    benchPress.muscle_impact.set('upper_chest', 0.2);
    benchPress.video = 'https://www.youtube.com/watch?v=vthMCtgVtFw';
    benchPress.muscles_overall = benchPress.src;
    this.cards[benchPress.id] = benchPress;
  }
}
