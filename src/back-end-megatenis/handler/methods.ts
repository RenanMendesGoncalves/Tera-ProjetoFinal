/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* import { ProdutosEvent } from '../interfaces/ProdutosEvent';
import dynamoDB from '../AWS/dynamoDB';
import TABLE_NAMES from '../constants/tableNames'; */

const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    switch (event.routeKey) {
      case "DELETE /items/{id}":
        await dynamo
          .delete({
            TableName: "TABELA_PRODUTOS",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.id}`;
        break;
      case "GET /items/{id}":
        body = await dynamo
          .get({
            TableName: "TABELA_PRODUTOS",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        break;
      case "GET /items":
        body = await dynamo.scan({ TableName: "TABELA_PRODUTOS" }).promise();
        break;
      case "PUT /items":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "TABELA_PRODUTOS",
            Item: {
              id: requestJSON.id,
              valor: requestJSON.valor,
              nome: requestJSON.nome,
              categoria: requestJSON.categoria,
            }
          })
          .promise();
        body = `Put item ${requestJSON.id}`;
        break;
          default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};

