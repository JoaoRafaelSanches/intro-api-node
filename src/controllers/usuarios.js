const db = require('../dataBase/connection');
const { json, response } = require('express');

// Controller para gerenciar avaliações
// Este módulo contém funções para listar, cadastrar, editar e apagar avaliações no banco de dados
module.exports = {

  // Listar todos os usuários
  async listarUsuario(request, response) {
    try {
      // instrução sql para listar usuários
      const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id FROM usuarios;';
      // executa a instrução de listagem no banco de dados
      const [rows] = await db.query(sql);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Lista de usuarios',
        itens: rows.length,
        dados: rows
      });
      // retorna erro caso ocorra
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
      // parametros passados via corpo de requisição
      const { usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id } = request.body;
      // instrução sql para inserção
      const sql = 'INSERT INTO usuarios (usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id) VALUES (?, ?, ?, ?, ?, ?);';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id];
      // executa a instrução de inserção no banco de dados
      const [rows] = await db.query(sql, values);
      return response.status(201).json({
        sucesso: true,
        mensagem: 'Usuário cadastrado com sucesso.',
        itens: rows.length,
        dados: rows
      });
      // retorna erro caso ocorra
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
      // parametros passados via corpo de requisição
      const { usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id } = request.body;
      // parametros passados via url
      const { usu_id } = request.params;
      // instrução sql para atualização
      const sql = 'UPDATE usuarios SET usu_nome = ?, usu_email = ?, usu_senha = ?, usu_cpf = ?, usu_tipo = ?, cid_id = ? WHERE usu_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id, usu_id];
      // executa a instrução de atualização no banco de dados
      const [rows] = await db.query(sql, values);
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Usuário atualizado com sucesso.',
        itens: rows.length,
        dados: rows
      });
    // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },
  
  // Apagar um usuário existente
  async apagarUsuario(request, response) {
    try {
      // parametros passados via url
      const { usu_id } = request.params;
      // instrução sql para deleção
      const sql = 'DELETE FROM usuarios WHERE usu_id = ?;';
      // definição de array com paramentros que receberão os valores do front-end
      const values = [usu_id];
      // executa a instrução de deleção no banco de dados
      const [rows] = await db.query(sql, values);
      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Usuário apagado com sucesso.',
        itens: rows.length,
        dados: rows
      });
    // retorna erro caso ocorra
    } catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  async login(request, response) {
    try {
      // parametros passados via copo de requisição
      const { usu_email, usu_senha } = request.body;
      // instrução sql para validação de login
      const sql = `SELECT usu_id, usu_nome, usu_tipo 
      FROM  usuarios WHERE usu_email = ? AND usu_senha = ?;`;
      // definição de array com parametros que receberão os valores do front-end
      const values = [usu_email, usu_senha];
      // executa a instrução de validação no banco de dados
      const usuarios = await db.query(sql, values);
      const nItens = usuarios[0].length;

      // verifica se o usuario existe
      if (nItens < 1) {
        return response.status(403).json({
          sucesso: false,
          mensagem: 'Login e/ou senha invalido.',
          dados: null
        });
      }

      // exibe o resultado da consulta
      return response.status(200).json({
        sucesso: true,
        mensagem: 'Login realizado com sucesso.',
        dados: usuarios[0]
      });
    }catch (error) {
      return response.status(500).json({
        sucesso: false,
        mensagem: 'Erro na requisição.',
        dados: error.mensage
      });
    }
  },

  // // Listar um usuário específico
  // async listarUnicoUsuario(request, response) {
  //   try {
  //     // parametros passados via url
  //     const { usu_id } = request.params;
  //     // instrução sql para listagem de um usuário específico
  //     const sql = 'SELECT usu_id, usu_nome, usu_email, usu_senha, usu_cpf, usu_tipo, cid_id FROM usuarios WHERE usu_id = ?;';
  //     // definição de array com paramentros que receberão os valores do front-end
  //     const values = [usu_id];
  //     // executa a instrução de listagem no banco de dados
  //     const [rows] = await db.query(sql, values);
  //     // exibe o resultado da consulta
  //     return response.status(200).json({
  //       sucesso: true,
  //       mensagem: 'Usuário encontrado.',
  //       itens: rows.length,
  //       dados: rows
  //     });
  //   // retorna erro caso ocorra
  //   } catch (error) {
  //     return response.status(500).json({
  //       sucesso: false,
  //       mensagem: 'Erro na requisição.',
  //       dados: error.mensage
  //     });
  //   }
  // }
}