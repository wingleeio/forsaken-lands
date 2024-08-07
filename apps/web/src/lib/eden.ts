import { App } from "@forsaken/api";
import { treaty } from "@elysiajs/eden";

export const eden = treaty<App>("http://localhost:3001");
