var app = require('./config/express')()
	port = 3000

app.listen(port, function(){
	console.log('servidor rodando')
})
