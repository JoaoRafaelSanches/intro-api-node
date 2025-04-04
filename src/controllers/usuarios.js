const db = require('../dataBase/connection');

module.exports = {
  // Listar todos os usuários
  async listarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Usuários.',
        dados: null
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },
  // Cadastrar um novo usuário
  async cadastrarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Usuários.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },
  // Editar um usuário existente
  async editarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Usuários.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },
  // Apagar um usuário existente
  async apagarUsuario(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Usuários.',
        dados: null
      });
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      })
    }
  },

  

  
}

