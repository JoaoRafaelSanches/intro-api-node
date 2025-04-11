const db = require('../dataBase/connection');

module.exports = {
  // Listar todos os preços
  async listarPreco(request, response) {
    try {
      const sql = 'SELECT pre_id, med_id, preco, ativo = 1 AS ativo FROM precos;';

      const [rows] = await db.query(sql);
      
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de Preços.',
        itens: rows.lenght,
        dados: rows
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },
  // Cadastrar preços
  async cadastrarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Cadastrar Preços.',
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
  // Editar preços
  async editarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Editar Preços.',
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
  // Apagar preços
  async apagarPreco(request, response) {
    try {
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Apagar Preços.',
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
