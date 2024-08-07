import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Scene } from "@forsaken/api";
import { eden } from "$lib/eden";

export const useGame = () => {
    const queryClient = useQueryClient();
    const query = useQuery({
        queryKey: ["game"],
        queryFn: async ({ queryKey }) => {
            const result = await eden.game.get();

            type Data = NonNullable<typeof result.data> extends AsyncGenerator<infer U> ? U : never;

            if (result.error) throw result.error;

            for await (const chunk of result.data) {
                queryClient.setQueryData(queryKey, chunk);
            }

            return null as unknown as Data;
        },
        staleTime: Infinity,
    });

    return {
        ...query,
        action: eden.action.post,
    };
};
