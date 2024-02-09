import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw new Error('Invalid attribute type');
    }

    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return super.sqft;
  }

  set sqft(newSqft) {
    super.sqft = newSqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(newFloor) {
    this._floors = newFloor;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}
