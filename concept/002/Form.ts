declare module 'template!./Form.html' {
}

import facadus = module('lib/facadus');
import template = module('template!./Form.html');

export class Form extends facadus.UIObject {
    template = <string>template;
    button:facadus.UIObject;
    text:facadus.UIObject;
    events = {
        'click button': Form.prototype._onSubmit,
        'change text': Form.prototype._onChange
    };

    private _onSubmit(e:Event) {
        e.preventDefault();
    }

    private _onChange(e:Event) {
        e.preventDefault();
    }
}
