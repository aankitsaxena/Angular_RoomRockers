import { Member } from "../member/member";

export class Task {
    taskId: number;
    taskTitle: string;
    taskDesc: string;
    startDate: string;
    endDate: string;
    participated_members: Member[];
}