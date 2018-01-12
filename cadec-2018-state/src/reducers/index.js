import events from "./events_reducer";
import { actions as ea, selectors as es } from "./events_reducer";

export const reducers = { events };
export const actions = { ...ea };
export const selectors = { ...es };
