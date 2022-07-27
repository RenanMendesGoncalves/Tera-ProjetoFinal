// Load the AWS SDK for Node.js
/* var AWS = require('aws-sdk'); */
// Load credentials and set Region from JSON file
AWS.config.loadFromPath('./config.json');

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var tableParams = {
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'S'
    },
    {
      AttributeName: 'categoria',
      AttributeType: 'S'
    },
    {
      AttributeName: 'nome',
      AttributeType: 'S'
    }, 
    {
      AttributeName: 'valor',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'TABELA_PRODUTOS',
  StreamSpecification: {
    StreamEnabled: false
  }
};

ddb.createTable(tableParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);

  }
});
