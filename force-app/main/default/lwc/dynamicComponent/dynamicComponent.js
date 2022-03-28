import { LightningElement, track, api } from 'lwc';

export default class DynamicComponent extends LightningElement {
    
    @track obj = []
    @api attribute_1
    @api attribute_2
    showHeader = false
    showFooter = false
    getLayoutComponents() {
        //iterate the array before returning 
        return this.obj
    }

    updateComponents() {
        for(let i = 0; i < 3; i++) {
            console.log(i)
            if(i==0) {
                this.obj = [
                    ...this.obj,
                    {
                        requiredKey: 0,
                        attribute1: 'header',
                        attribute2: true
                    }
                ]
            }else if(i == 1) {
                this.obj = [
                    ...this.obj,
                    {
                        requiredKey: 1,
                        attribute1: 'footer',
                        attribute2: false
                    }
                ]
            }

        }
    }
}