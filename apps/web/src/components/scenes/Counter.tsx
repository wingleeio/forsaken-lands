import { Button } from "$components/ui/button";
import { useGame } from "$hooks/useGame";

export const Counter = () => {
    const { data, action } = useGame();

    if (!data || data.type !== "counter") return null;

    return (
        <div className="flex gap-2 p-4">
            <Button onClick={() => action({ type: "subtract" })}>Subtract</Button>
            <div className="px-4 bg-slate-100 rounded-md flex items-center">{data.count}</div>
            <Button onClick={() => action({ type: "add" })}>Add</Button>
        </div>
    );
};
