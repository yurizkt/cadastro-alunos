module.exports = function(app){
	app.get('/alunos/1ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista1ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/1ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/2ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista2ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/2ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/3ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista3ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/3ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/4ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista4ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/4ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/5ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista5ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/5ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/6ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista6ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/6ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/7ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista7ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/7ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/8ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista8ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/8ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/9ano', function(req, res, next){
		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.lista9ano(function(err, results){
			if(err){
				return next(err)
			}
			res.render('alunos/9ano', {lista:results})
		})
		connection.end()
	})

	app.get('/alunos/cadastro', function(req, res){
		res.render('alunos/form', { errosValidacao:{}, aluno:{} })
	})

	app.post('/alunos', function(req, res){
		var aluno = req.body

		req.assert('nome', 'Nome é obrigatório').notEmpty()
		req.assert('idade', 'Formato inválido').isLength({ min: 1, max: 2})
		req.assert('serie', 'Série é obrigatório').notEmpty()

		var erros = req.validationErrors()
		if(erros){
			res.status(400).render('alunos/form', {errosValidacao:erros, aluno:aluno })
			return
		}

		var connection = app.infra.connectionFactory()
			alunosDAO = new app.infra.AlunosDAO(connection)

		alunosDAO.salva(aluno, function(err, results){
			res.redirect('/')
		})
	})
}