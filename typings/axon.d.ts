/** Declaration file generated by dts-gen */

declare module 'axon' {

    export class PubSocket {
        constructor();

        send(msg: any, ...args: any[]): any;

    }

    export class PullSocket {
        constructor();

        send(): void;

    }

    export class RepSocket {
        constructor();

        onmessage(sock: any, ...args: any[]): any;

    }

    export class ReqSocket {
        constructor();

        id(): any;

        onmessage(): any;

        send(msg: any, ...args: any[]): void;

    }

    export class Socket {
        constructor();

        addSocket(sock: any): void;

        address(): any;

        bind(port: any, host: any, fn: any): any;

        close(fn: any): void;

        closeServer(fn: any): void;

        closeSockets(): void;

        connect(port: any, host: any, fn: any): any;

        disable(name: any): any;

        disabled(name: any): any;

        enable(name: any): any;

        enabled(name: any): any;

        get(name: any): any;

        handleErrors(sock: any): any;

        onconnect(sock: any): void;

        onmessage(sock: any): any;

        pack(args: any): any;

        removeSocket(sock: any): void;

        set(name: any, val: any, ...args: any[]): any;

        use(plugin: any): any;

    }

    export class SubEmitterSocket {
        constructor();

        off(event: any): any;

        on(event: any, fn: any): any;

        onmessage(): any;

    }

    export class SubSocket {
        constructor();

        clearSubscriptions(): void;

        hasSubscriptions(): any;

        matches(topic: any): any;

        onmessage(sock: any): any;

        send(): void;

        subscribe(re: any): any;

        unsubscribe(re: any): void;

    }

    export function PubEmitterSocket(): void;

    export function PushSocket(): void;

    export function socket(type: any, options: any): any;


    export namespace types {
        class pub {
            constructor();

            send(msg: any, ...args: any[]): any;

        }

        class pull {
            constructor();

            send(): void;

        }

        class rep {
            constructor();

            onmessage(sock: any, ...args: any[]): any;

        }

        class req {
            constructor();

            id(): any;

            onmessage(): any;

            send(msg: any, ...args: any[]): void;

        }

        class sub {
            constructor();

            clearSubscriptions(): void;

            hasSubscriptions(): any;

            matches(topic: any): any;

            onmessage(sock: any): any;

            send(): void;

            subscribe(re: any): any;

            unsubscribe(re: any): void;

        }

        function push(): void;

    }

}