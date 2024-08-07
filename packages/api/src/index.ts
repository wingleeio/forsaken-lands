import { Elysia } from "elysia";

import { GeneratorEmitter } from "$lib/GeneratorEmitter";
import cors from "@elysiajs/cors";
import { type Action, ActionSchema } from "$actions";
import type { Scene } from "$scenes";

export type * from "$scenes";
export type * from "$actions";
const events = new GeneratorEmitter();

export const app = new Elysia()
    .use(cors({ origin: "*" }))
    .get("/", () => {
        return {
            message: "Hello Elysia",
        };
    })
    .get("/game", async function* () {
        let count = 0;

        yield {
            type: "intro",
        } satisfies Scene as Scene;

        for await (const action of events.listen<Action>("game")) {
            switch (action.type) {
                case "home":
                    yield {
                        type: "counter",
                        count,
                    } satisfies Scene as Scene;
                    break;
                case "add":
                    count++;
                    yield {
                        type: "counter",
                        count,
                    } satisfies Scene as Scene;
                    break;
                case "subtract":
                    if (count > 0) count--;
                    yield {
                        type: "counter",
                        count,
                    } satisfies Scene as Scene;
                    break;
                default:
                    continue;
            }
        }
    })
    .post(
        "/action",
        (c) => {
            events.emit("game", c.body);
        },
        {
            body: ActionSchema,
        },
    );

export type App = typeof app;
