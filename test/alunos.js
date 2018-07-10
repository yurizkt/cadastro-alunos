var express = require('../config/express')()
	request = require('supertest')(express)
	DatabaseCleaner = require('database-cleaner')
	databaseCleaner = new DatabaseCleaner('mysql')

describe('#AlunosController', function(){

	beforeEach(function(done){
		databaseCleaner.clean(express.infra.connectionFactory(), function(){
			done()
		})
	})

	afterEach(function(done){
		databaseCleaner.clean(express.infra.connectionFactory(), function(){
			done()
		})
	})

	it('#listagem html', function(done){
		request.get('/alunos')
			   .set('Accept', 'text/html')
			   .expect('Content-Type',/html/)
			   .expect(200, done)
	})

	it('#cadastro de novo aluno com dados inválidos', function(done){

		request.post('/alunos')
			   .send({
				   	nome: '',
				   	idade: '',
				   	serie: ''
			   })
			   .expect(400,done)
	})

	it('#cadastro de novo aluno com dados válidos', function(done){
		request.post('/alunos')
			   .send({ nome: 'José', serie: '4º ano', idade: 9})
			   .expect(302)
			   .end(function(err, response){
			   		done()
			   })
	})
})