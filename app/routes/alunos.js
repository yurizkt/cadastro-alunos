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

		req.assert('nome', 'Nome é obrigatório').notEmpty()
		req.assert('idade', 'Formato inválido').isLength({ min: 1, max: 2})
		req.assert('serie', 'Série é obrigatório').notEmpty()

		var erros = req.validationErrors()
		if(erros){
			res.render('alunos/form', {errosValidacao:erros })
			return
		}

		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.salva(aluno, function(err, results){
			res.redirect('/alunos')
		})
	})
}