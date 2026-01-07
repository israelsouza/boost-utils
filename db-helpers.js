import getConnection from "connectionOracle.js";

class DBHelper {
  /**
   * Executa uma operação de banco de dados garantindo que a conexão seja aberta e fechada corretamente, e que os logs sejam registrados.
   * @param {object} logInfo - Informações de contexto para o log. Ex: { module: 'AdmModel', methodName: 'listar' }
   * @param {Function} callback - A função que contém a lógica da query, recebendo a conexão como argumento.
   * @returns {Promise<any>} O resultado da função de callback.
   */
  static async withConnection(logInfo, callback) {
    const { module, methodName } = logInfo;
    let connection;
    try {
      connection = await getConnection();
      const result = await callback(connection);
      return result;
    } catch (error) {
      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (closeError) {}
      }
    }
  }

  /**
   * Executa uma série de operações de banco de dados como uma transação,garantindo commit em caso de sucesso ou rollback em caso de erro.
   * @param {object} logInfo - Informações de contexto para o log. Ex: { module: 'AdmModel', methodName: 'deletar' }
   * @param {Function} callback - A função assíncrona que contém a lógica da transação, recebendo a conexão como argumento.
   * @returns {Promise<any>} O resultado da função de callback.
   */
  static async withTransaction(logInfo, callback) {
    const { module, methodName } = logInfo;
    let connection;
    try {
      connection = await getConnection();
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      if (connection) {
        try {
          await connection.rollback();
        } catch (rbError) {}
      }

      throw error;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (closeError) {}
      }
    }
  }
}

export default DBHelper;
