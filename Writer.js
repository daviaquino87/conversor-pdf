const fs = require("fs");
const util = require("util")

class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile)
  }

  async Write(filename, texto) {
    try {
      await this.writer(filename, texto);
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = Writer;