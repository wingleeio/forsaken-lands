import { Button } from "$components/ui/button";
import { isScene } from "$lib/utils";
import { useGame } from "$hooks/useGame";

export const Intro = () => {
    const { data, action } = useGame();

    if (!isScene(data, "intro")) return null;

    return (
        <div className="flex gap-2 p-4">
            <Button onClick={() => action({ type: "home" })}>Login</Button>
        </div>
    );
};
