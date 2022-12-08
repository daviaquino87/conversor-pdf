const Reader = require('./Reader')
const Processor = require("./Processor")
const Table = require("./Table")
const HtmlParser = require("./HtmlParser")
const Writer = require("./Writer")
const WriterPDF = require("./WriterPDF")

const reader = new Reader()
const writer = new Writer()

async function main(){
  const dados = await reader.Read("./file.csv")
  const processorData = Processor.Process(dados)
  const usuarios = new Table(processorData);

  var html = await HtmlParser.Parse(usuarios);
  // writer.Write( Date.now() +".html",html) gera o arquivo html
  WriterPDF.WriterPdf( Date.now() +".PDF",html)

}

main()