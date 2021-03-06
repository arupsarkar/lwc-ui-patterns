import { LightningElement, api } from 'lwc';

export default class FooterComponent extends LightningElement {

    _compObj
    _compVisible
    _isVisible

    @api
    set compObj(_value) {
        console.log('---> footer comp obj ', _value)
        if(this._compObj !== _value) {
            this._compObj = _value
        }
    }

    get compObj() {
        return this._compObj
    }

    @api
    set compVisible(_value) {
        console.log('---> footer visible ', _value)
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
        if(this._compVisible && this._compObj === 'footer') {
            this._isVisible = true
        }
        console.log('---> connectedCallBack', 'end')        
    }

    renderedCallback() {
        console.log('---> renderedCallback', 'start')
        console.log('---> renderedCallback', 'end')                
    }

}