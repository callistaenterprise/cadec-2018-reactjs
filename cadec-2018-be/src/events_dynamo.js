import * as d from "./utils/dynamo_adapter";
const eventsTable = process.env.eventsTable;
export const getEvent = id => d.getEntity(eventsTable, id);
export const getEvents = id => d.getEntities(eventsTable);
