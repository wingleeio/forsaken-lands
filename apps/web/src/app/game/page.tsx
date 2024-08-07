"use client";

import { Counter } from "$components/scenes/Counter";
import { Fragment } from "react";
import { Intro } from "$components/scenes/Intro";
import { useGame } from "$hooks/useGame";

export default function Game() {
    const { data, isLoading, isError } = useGame();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    if (!data) return <div>No data</div>;

    return (
        <Fragment>
            <Intro />
            <Counter />
        </Fragment>
    );
}
