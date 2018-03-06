import aws from "aws-sdk";
import { v4 } from "uuid";

let docClient;
// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  // console.log("--- Dynamo is local!");
  docClient = new aws.DynamoDB.DocumentClient({
    region: "localhost",
    endpoint: "http://localhost:8000"
  });
} else {
  docClient = new aws.DynamoDB.DocumentClient({
    sessionToken: process.env.AWS_SESSION_TOKEN,
    region: process.env.AWS_REGION
  });
}

export async function getRelatedEntities(
  keyName,
  keyValues = [],
  tableName,
  attributesToGet = []
) {
  const end = (length, i, endString) => (i + 1 < length ? endString : "");
  const eq = (i, query, keyName, keyValues) =>
    `${query}${keyName} = :${keyName}${i}${end(keyValues.length, i, " or ")}`;

  const contains = (i, query, keyName, keyValues) =>
    `${query}contains(${keyName}, :${keyName}${i})${end(
      keyValues.length,
      i,
      " or "
    )}`;

  const buildQuery = (keyName, keyValues = []) => {
    const query = keyValues.reduce((query, keyValue, i) => {
      const res = many
        ? contains(i, query, keyName, keyValues)
        : eq(i, query, keyName, keyValues);
      return res;
    }, "");
    return query;
  };
  const buildExpressionAttibuteValues = (keyName, keyValues) =>
    keyValues.reduce(
      (e, keyValue, i) => ({ ...e, [`:${keyName}${i}`]: keyValue }),
      {}
    );
  const params = {
    TableName: tableName,
    FilterExpression: buildQuery(keyName, keyValues),
    ProjectionExpression: attributesToGet.reduce(
      (pe, attribute, i) =>
        `${pe}${attribute}${end(attributesToGet.length, i, ",")}`,
      ""
    ),
    ExpressionAttributeValues: buildExpressionAttibuteValues(keyName, keyValues)
  };
  // console.log("--- params", JSON.stringify(params, null, 2));

  return docClient
    .scan(params)
    .promise()
    .then(data => {
      // console.log("--- getRelatedEntities", tableName); //, JSON.stringify(data), JSON.stringify(data.Items));
      return data.Items;
    });
}

export async function getEntities(tableName, attributesToGet) {
  const params = {
    TableName: tableName,
    ...(attributesToGet ? { AttributesToGet: attributesToGet } : {})
  };
  // console.log("--- getEntities", params);

  return docClient
    .scan(params)
    .promise()
    .then(data => {
      // console.log("--- getEntities", tableName);
      return data.Items;
    });
}

export async function getEntity(tableName, id, attributesToGet) {
  const params = {
    TableName: tableName,
    Key: {
      id: `${id}`
    },
    AttributesToGet: attributesToGet
  };
  return docClient
    .get(params)
    .promise()
    .then(data => {
      // console.log("---getEntity", tableName);
      return data && data.Item;
    });
}

export async function createEntity(tableName, entity) {
  // set an id if not set
  // console.log("--- createEntity", entity);
  const createdAt = new Date();
  entity = { ...entity, id: entity.id ? entity.id : v4() };
  entity = { ...entity, createdAt: createdAt.getTime() };
  const params = {
    TableName: tableName,
    Item: entity
  };
  // console.log("--- entity params", JSON.stringify(params));
  return docClient
    .put(params)
    .promise()
    .then(() => entity);
}

export async function deleteEntity(tableName, id, idName = "id") {
  const params = {
    TableName: tableName,
    Key: {
      [idName]: id
    }
  };
  return docClient
    .delete(params)
    .promise()
    .then((err, data) => {
      if (err) {
        const msg = `DeleteItem succeeded:, ${JSON.stringify(data, null, 2)}`;
        console.error(msg);
        return new Error(msg);
      } else {
        const msg = `DeleteItem succeeded:, ${JSON.stringify(data, null, 2)}`;
        console.log(msg);
        return msg;
      }
    });
}

export async function updateItem(params) {
  return docClient
    .update(params)
    .promise()
    .then((data, err) => {
      if(err){
        console.error("UpdateItem failed!!", JSON.stringify(err));
      }
      return data.Attributes;
    });
}
