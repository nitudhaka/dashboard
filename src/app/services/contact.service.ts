import { Injectable } from "@angular/core";
import { ContactInfo } from "../constants/contactInfo.constant";
import { User } from "../constants/user.constant";

@Injectable()
export class ContactService {

    getContactInfo(contactId) {
        return ContactInfo[contactId];
    }

    getUserDetails() {
        return User;
    }

}