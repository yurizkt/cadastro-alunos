function AlunosDAO(connection){
	this._connection = connection
}

AlunosDAO.prototype.lista = function(callback){
	this._connection.query('select * from alunos', callback)
}

AlunosDAO.prototype.salva = function(aluno, callback){
	this._connection.query('insert into alunos set ?', aluno, callback)
}

module.exports = function(){
	return AlunosDAO
}