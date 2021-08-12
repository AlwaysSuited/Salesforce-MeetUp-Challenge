import { LightningElement, api, wire } from 'lwc';
//import meetUpRegistrationAutomator from '@salesforce/apex/meetUpAppInfoAutomator.meetUpRegistrationAutomator';
import MEETUPREGISTRATION_OBJECT from '@salesforce/schema/MeetupRegistration__c';
import MEETUPREGISTRATION_NAME_FIELD from '@salesforce/schema/MeetupRegistration__c.Name';
import MEETUPREGISTRATION_MEETUP_FIELD from '@salesforce/schema/MeetupRegistration__c.Meetup__c';
import MEETUPREGISTRATION_EMAIL_FIELD from '@salesforce/schema/MeetupRegistration__c.email__c';
import MEETUPREGISTRATION_FIRSTNAME_FIELD from '@salesforce/schema/MeetupRegistration__c.FirstName__c';
import MEETUPREGISTRATION_LASTNAME_FIELD from '@salesforce/schema/MeetupRegistration__c.LastName__c';
import MEETUPREGISTRATION_AUTONUMBER_FIELD from '@salesforce/schema/MeetupRegistration__c.AutoNumberFill__c';

export default class createRecordForm  extends LightningElement {
    // Expose fields to make available
    meetupAutofill = MEETUPREGISTRATION_AUTONUMBER_FIELD;   
    meetupregistrationsId;
    meetupregistrationObject = MEETUPREGISTRATION_OBJECT;
    nameField = MEETUPREGISTRATION_NAME_FIELD;
    meetupField = MEETUPREGISTRATION_MEETUP_FIELD;
    emailField = MEETUPREGISTRATION_EMAIL_FIELD;
    firstnameField = MEETUPREGISTRATION_FIRSTNAME_FIELD;
    lastnameField = MEETUPREGISTRATION_LASTNAME_FIELD;
    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;
   // @wire (meetUpRegistrationAutomator) MeetupRegistration__c;

    //handles success event
    handleSuccess(event) {
        this.meetupregistrationsId = event.detail.id;
        const updatedRecord = event.detail.id;
        console.log('onsuccess: ', updatedRecord);
        alert('SUCCESSFUL REGISTRATION : CLICK RESET TO START OVER');
    }
 
    //shows end user success mesage
    showSuccessToast() {
        this.meetupregistrationsId = event.detail.id;
        const updatedRecord = event.detail.id;
        console.log('onsuccess: ', updatedRecord);
        alert('SUCCESSFUL REGISTRATION : CLICK RESET TO START OVER');
        const event = new ShowToastEvent({
            title: 'SUCCESS',
            message: 'SUCCESSFUL REGISTRATION : CLICK RESET TO START OVER',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }

    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}



