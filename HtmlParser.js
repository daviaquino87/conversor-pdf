var ejs = require('ejs')

class HtmlParser {
  static async Parse(table){
   return await ejs.renderFile("./exemple_table.ejs",{header: table.header,rows:table.rows})
  }
}

module.exports = HtmlParser;