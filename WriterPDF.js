var pdf = require("html-pdf")

class WriterPDF{
  static WriterPdf(filename,html){
    pdf.create(html, {
      childProcessOptions: {
        env: {
          OPENSSL_CONF: '/dev/null',
        },
      }
    }).toFile(filename,(err)=>{
      console.log(err)
    })
  }
}
module.exports = WriterPDF