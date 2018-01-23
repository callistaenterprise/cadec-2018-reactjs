import * as d from "./utils/dynamo_adapter";
const eventsTable = process.env.eventsTable;
export const getEvent = id => d.getEntity(eventsTable, id);
export const getEvents = id => d.getEntities(eventsTable);
export const updateStars = (cadecId, talkId, deviceId, stars) => {
  const params = {
    TableName: eventsTable,
    Key: {
      id: cadecId
    },
    UpdateExpression: "SET talks.#talk.stars.#deviceId = :value",
    ExpressionAttributeNames: {
      "#talk": talkId,
      "#deviceId": deviceId
    },
    ExpressionAttributeValues: {
      ":value": stars
    },
    ReturnValues: "ALL_NEW"
  };
  console.log("------ params", params);
  return d.updateItem(params);
};
