"use client";

import { Counter } from "$components/scenes/Counter";
import { Fragment } from "react";
import { useGame } from "$hooks/useGame";

export default function Game() {
    const { data, isLoading, isError } = useGame();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;
    if (!data) return <div>No data</div>;

    return (
        <Fragment>
            <Counter />
        </Fragment>
    );
}
