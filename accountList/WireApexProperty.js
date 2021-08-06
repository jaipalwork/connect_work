import { LightningElement, api, wire } from 'lwc';
import getRelatedContacts from '@salesforce/apex/ContactController.getContacts';
export default class WireApexProperty extends LightningElement {
    @api recordId;
    @wire(getRelatedContacts, { accountId: '$recordId' })
    contacts;
}   