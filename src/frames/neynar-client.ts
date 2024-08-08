import { NeynarAPIClient } from "@neynar/nodejs-sdk"
import { config } from "../config"

export const neynarClient = new NeynarAPIClient(config().apiKey)