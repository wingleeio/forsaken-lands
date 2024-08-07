import Elysia, { Static, t } from "elysia";

export const ActionSchema = t.Union([
    t.Object({
        type: t.Literal("add"),
    }),
    t.Object({
        type: t.Literal("subtract"),
    }),
]);

export type Action = Static<typeof ActionSchema>;

export const actions = () => {
    return new Elysia().model({
        actions: ActionSchema,
    });
};
