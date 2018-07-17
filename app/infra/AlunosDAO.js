function AlunosDAO(connection){
	this._connection = connection
}

AlunosDAO.prototype.listaAll = function(callback){
	this._connection.query('select * from alunos', callback)
}
AlunosDAO.prototype.lista1ano = function(callback){
	this._connection.query('select * from alunos where serie = "1º ano"', callback)
}
AlunosDAO.prototype.lista2ano = function(callback){
	this._connection.query('select * from alunos where serie = "2º ano"', callback)
}
AlunosDAO.prototype.lista3ano = function(callback){
	this._connection.query('select * from alunos where serie = "3º ano"', callback)
}
AlunosDAO.prototype.lista4ano = function(callback){
	this._connection.query('select * from alunos where serie = "4º ano"', callback)
}
AlunosDAO.prototype.lista5ano = function(callback){
	this._connection.query('select * from alunos where serie = "5º ano"', callback)
}
AlunosDAO.prototype.lista6ano = function(callback){
	this._connection.query('select * from alunos where serie = "6º ano"', callback)
}
AlunosDAO.prototype.lista7ano = function(callback){
	this._connection.query('select * from alunos where serie = "7º ano"', callback)
}
AlunosDAO.prototype.lista8ano = function(callback){
	this._connection.query('select * from alunos where serie = "8º ano"', callback)
}
AlunosDAO.prototype.lista9ano = function(callback){
	this._connection.query('select * from alunos where serie = "9º ano"', callback)
}

AlunosDAO.prototype.salva = function(aluno, callback){
	this._connection.query('insert into alunos set ?', aluno, callback)
}

AlunosDAO.prototype.deleta = function(aluno, callback){
	this._connection.query('delete from alunos where id = ?', aluno, callback)
}

module.exports = function(){
	return AlunosDAO
}