export class GlobalEvent {
    private event;

    constructor(event?) {
        if (event) {
            this.event = event;
        } else {
            this.event = () => {
                console.log('unregister event');
            }
        }
    }

    public set(event): void {
        this.event = event;
    }

    public trigger(args?: any): any {
        return this.event(args);
    }
}