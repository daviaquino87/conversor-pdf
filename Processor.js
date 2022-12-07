class Processor {
  static Process(data){
    var phrases = data.split("\r\n")
    var rows = []
    phrases.forEach(row => {
      var arr = row.split(",")
      rows.push(arr)
    });

    return rows
  }
}

module.exports = Processor;