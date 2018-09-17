import { Injectable } from "@angular/core";
import { Task } from "./task";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    taskList: Task[];

    getAllTask() : Task[] {
        this.taskList = [
            {
                taskId : 1,
                taskTitle : 'Clean Kitchen',
                taskDesc : 'Clean all vessels, gas, almirah and kitchen floor.',
                startDate: '20180814',
                endDate: '20180815',
                participated_members: [
                    {
                        name : 'Ankit',
                        age : 23,
                        address : 'Gonda'
                    }
                ]
            },
            {
                taskId : 2,
                taskTitle : 'Clean Room',
                taskDesc : 'Clean room and hall floor and throw dustbin wastage.',
                startDate: '20180814',
                endDate: '20180815',
                participated_members: [
                    {
                        name : 'Uttam',
                        age : 23,
                        address : 'Gazipur'
                    }
                ]
            }
        ];

        return this.taskList;
    }
}