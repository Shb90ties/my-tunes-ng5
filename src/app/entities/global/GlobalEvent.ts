export class GlobalEvent {
    private event;
    private isRegister: boolean;
    private isPerminant: boolean;
    /** if the event is perminant it can only be set once */

    constructor(event?, isPerminant?: boolean) {
        if (event) {
            this.event = event;
            this.isRegister = true;
        } else {
            this.event = () => {
                console.log('unregister event');
            }
            this.isRegister = false;
        }
        this.isPerminant = (isPerminant) ? true : false;
    }

    public set(event): void {
        if (!this.isPerminant || !this.isRegister) {
            this.event = event;
            this.isRegister = true;
        }
    }

    public trigger(args?: any): any {
        return this.event(args);
    }
}