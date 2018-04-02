export class GlobalEvent {
    private event: any;

    constructor(event?: any) {
        if (event) {
            this.event = event;
        } else {
            this.event = () => {
                console.log('unregister event');
            }
        }
    }

    public set(event: any): void {
        this.event = event;
    }

    public trigger(args?: any): any {
        return this.event(args);
    }
}