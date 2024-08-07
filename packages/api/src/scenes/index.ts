import Elysia, { Static, t } from "elysia";

export const SceneSchema = t.Union([
    t.Object({
        type: t.Literal("counter"),
        count: t.Number(),
    }),
    t.Object({
        type: t.Literal("intro"),
    }),
]);

export type Scene = Static<typeof SceneSchema>;

export const scenes = () => {
    return new Elysia().model({
        scenes: SceneSchema,
    });
};
