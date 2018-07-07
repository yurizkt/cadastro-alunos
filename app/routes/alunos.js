module.exports = function(app){
	app.get('/alunos', function(req, res){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista(function(err, results){
			res.render('alunos/lista', {lista:results})
		})

		connection.end();
	})

	app.get('/alunos/cadastro', function(req, res){
		res.render('alunos/form')
	})

	app.post('/alunos', function(req, res){
		var aluno = req.body

		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.salva(aluno, function(err, results){
			res.redirect('/alunos')
		})
	})
}