import { EventEmitter } from "events";

export class GeneratorEmitter extends EventEmitter {
    async *listen<T>(eventName: string): AsyncGenerator<T, void, unknown> {
        const listeners = new Set<any>();

        const createPromise = () =>
            new Promise<T>((resolve, reject) => {
                const listener = (data: T) => {
                    resolve(data);
                };
                listeners.add(listener);
                this.once(eventName, listener);
            });

        try {
            while (true) {
                yield await createPromise();
            }
        } finally {
            for (const listener of listeners) {
                this.off(eventName, listener);
            }
        }
    }
}
