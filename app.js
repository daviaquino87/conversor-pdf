const Reader = require('./Reader')
const Processor = require("./Processor")
const Table = require("./Table")

const reader = new Reader()

async function main(){
  const dados = await reader.Read("./file.csv")
  const processorData = Processor.Process(dados)

  const usuarios = new Table(processorData);
  

  console.log(usuarios.RowCount)
}

main()