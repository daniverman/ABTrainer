export class MuscleCard {
  src = '';
  title = '';
  id = '';
  group = '';
  major = '';
  subMajor = '';
  type = '';

  constructor(img, title, id, group, major, type, subMajor?) {
    this.src = img;
    this.title = title;
    this.id = id;
    this.major = major;
    if (subMajor) {
      this.subMajor = subMajor;
    }
    this.group = group;
    this.type = type;
  }
}

export class MuscleCardCollection {
  cards = new Map();

  constructor() {
    const upperChest = new MuscleCard('./assets/upper_chest.png', 'Upper Chest', 'upper_chest', 'chest', 'upper_chest', 'sub_group');
    const chest = new MuscleCard('./assets/chest_card.png', 'Chest', 'chest', 'chest', 'chest', 'group');
    this.cards[upperChest.id] = upperChest;
    this.cards[chest.id] = chest;
  }
}
