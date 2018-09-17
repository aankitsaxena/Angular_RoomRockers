import { Component, OnInit } from "@angular/core";
import { Member } from "./member";
import { MemberService } from "./member_Service";

@Component({
    selector: 'member-list',
    templateUrl: './member_list.component.html'

})
export class MemberListComponent implements OnInit{
    members: Member[];
    
    constructor(private memberService: MemberService) {
    }

    ngOnInit(): void {
        this.members = this.memberService.getMembersList();
    }
    
}