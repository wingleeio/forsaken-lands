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
    .get("/", () => "Hello Elysia")
    .get("/game", async function* () {
        let count = 0;

        yield {
            type: "intro",
        } satisfies Scene as Scene;

        for await (const action of events.listen<Action>("game")) {
            switch (action.type) {
                case "add":
                    count++;
                    yield {
                        type: "counter",
                        count,
                    } satisfies Scene as Scene;
                    break;
                case "subtract":
                    count--;
                    yield {
                        type: "counter",
                        count,
                    } satisfies Scene as Scene;
                    break;
                default:
                    break;
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
