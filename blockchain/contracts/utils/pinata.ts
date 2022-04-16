import pinataClient from "@pinata/sdk";
import {config as dotEnvConfig} from "dotenv";
dotEnvConfig();

const PINATA_API_KEY = process.env.PINATA_API_KEY || "";
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY || "";
export const pinata = pinataClient(PINATA_API_KEY, PINATA_SECRET_API_KEY);

