"use client";

import { eden } from "$lib/eden";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
    const { data } = useQuery({
        queryKey: ["hello"],
        queryFn: async () => {
            const result = await eden.index.get();
            if (result.error) throw result.error;
            return result.data;
        },
    });

    if (!data) return <div>Loading...</div>;

    return <div>{data.message}</div>;
}
