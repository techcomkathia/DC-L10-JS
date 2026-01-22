// Função utilitária para validar campos obrigatórios em requisições
module.exports = function validateRequest(requiredFields, reqBody) {
  const missing = requiredFields.filter(field => !(field in reqBody));
  if (missing.length > 0) {
    throw new Error('Campos obrigatórios ausentes: ' + missing.join(', '));
  }
};