import { Component, OnInit } from "@angular/core";
import { Member } from "./member";
import { MemberService } from "./member_Service";

@Component({
    selector: 'member_desc',
    templateUrl: './member_desc.html'
})

export class MemberDesc{
    firstName: string = 'A';
    lastName: string = 'B';
    age: number = 5;
    address: string = 'C';

    member: Member;

    constructor(private memberService: MemberService) {
    }

    addMember() : boolean {
        this.member = {
            name: this.firstName + ' ' + this.lastName,
            age: this.age,
            address: this.address
        }

        return this.memberService.addMember(this.member);
    }
}