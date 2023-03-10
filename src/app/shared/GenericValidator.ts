import { FormGroup } from "@angular/forms";

export class GenericValidator{

 constructor(private validationMessages : {[key:string]:{[key:string]:string}}){}
//process each control in formgroup
//and it should return a set of validation error messages
   processMessages(container:FormGroup):{[key:string]:string}{

    const messages:any={};
    //if the form group has nested form group or is it control
    //ngIf on the form
    //where we are checking the Form Group --controls or does it have FormGroup
    for (const controlKey in container.controls) {
        if (container.controls.hasOwnProperty(controlKey)) {
          const c = container.controls[controlKey];
          // If it is a FormGroup, process its child controls.
          if (c instanceof FormGroup) {
            const childMessages = this.processMessages(c);
            Object.assign(messages, childMessages);
          } else {
            // Only validate if there are validation messages for the control
            if (this.validationMessages[controlKey]) {
              messages[controlKey] = '';
              if ((c.dirty || c.touched) && c.errors) {
                Object.keys(c.errors).map(messageKey => {
                  if (this.validationMessages[controlKey][messageKey]) {
                    messages[controlKey] += this.validationMessages[controlKey][messageKey] + ' ';
                  }
                });
              }
            }
          }
        }
      }

    return messages;
   }

}