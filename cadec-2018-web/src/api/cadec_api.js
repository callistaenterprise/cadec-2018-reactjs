import { cadecModel } from "./payload";

export const getCadec = year => Promise.resolve(cadecModel[year]);
