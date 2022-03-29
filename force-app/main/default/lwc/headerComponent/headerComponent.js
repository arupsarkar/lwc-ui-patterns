import { LightningElement, api, track } from 'lwc';

export default class HeaderComponent extends LightningElement {
    
    _compObj
    _compVisible
    _isVisible
    @track obj = []

    @api
    set compObj(_value) {
        console.log(_value)
        if(this._compObj !== _value) {
            this._compObj = _value
        }
    }

    get compObj() {
        return this._compObj
    }

    @api
    set compVisible(_value) {
        console.log(_value)
        if(this._compVisible !== _value) {
            this._compVisible = _value
        }
    }

    get compVisible() {
        return this._compVisible
    }

    constructor() {
        super()
        console.log('---> constructor', 'start')

    }
    connectedCallback() {
        console.log('---> connectedCallBack', 'start')
        if(this._compVisible && this._compObj === 'header') {
            this._isVisible = true
        }
        this.mutateComponents()        
        console.log('---> connectedCallBack', 'end')        
    }

    renderedCallback() {
        console.log('---> renderedCallback', 'start')
        console.log('---> renderedCallback', 'end')                
    }


    mutateComponents() {
        for(let i = 0; i < 3; i++) {
            console.log(i)
            if(i==0) {
                this.obj = [
                    ...this.obj,
                    {
                        componentIndex: 0,
                        attribute1: 'subheader-1',
                        attribute2: true
                    }
                ]
            }else if(i == 1) {
                this.obj = [
                    ...this.obj,
                    {
                        componentIndex: 1,
                        attribute1: 'subheader-2',
                        attribute2: true
                    }
                ]
            }else if(i == 2) {
                this.obj = [
                    ...this.obj,
                    {
                        componentIndex: 2,
                        attribute1: 'subheader-3',
                        attribute2: true
                    }
                ]
            }

        }
        return this.obj
    }    
}