export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Invalid attribute type');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set(newSqft) {
    this._sqft = newSqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-enable class-methods-use-this */
}
