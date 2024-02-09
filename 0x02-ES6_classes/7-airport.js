export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new Error('Invalid attribute type');
    }

    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  toString() {
    return `Airport [${this.code}] { _name: '${this.name}', _code: '${this.code}' }`;
  }
}
