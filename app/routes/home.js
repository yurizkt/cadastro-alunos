module.exports = function(app){
	app.get('/', function(req, res){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)
		alunosDAO.listaAll(function(erros, resultados){
			res.render('home/index', {lista: resultados})
		})
		connection.end()
	})
}