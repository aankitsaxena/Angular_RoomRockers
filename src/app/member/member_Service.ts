import { Member } from "./member";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    members: Member[] = [];

    getMembersList() : Member[] {
        this.members = [
            {
                name : 'Ankit',
                age : 23,
                address : 'Gonda'
            },
            {
                name : 'Rohit',
                age : 26,
                address : 'Ballia'
            },
            {
                name : 'Uttam',
                age : 23,
                address : 'Gazi Pur'
            }
        ];

        return this.members;
    }

    addMember(member: Member) : boolean {
        this.members.push(member);
        return true;
    }
}