import OpenAI from "openai";
import { OPENAI } from "./constants";

const client = new OpenAI({
  apiKey: OPENAI,
  dangerouslyAllowBrowser: true,
});
export default client;
