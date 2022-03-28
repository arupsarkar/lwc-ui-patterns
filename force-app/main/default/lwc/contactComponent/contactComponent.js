import { LightningElement, api } from 'lwc';

export default class ContactComponent extends LightningElement {

    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];




    _compObj
    _compVisible
    _isVisible

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
        if(this._compVisible && this._compObj === 'contact') {
            this._isVisible = true
        }
        console.log('---> connectedCallBack', 'end')        
    }

    renderedCallback() {
        console.log('---> renderedCallback', 'start')
        console.log('---> renderedCallback', 'end')                
    }

}