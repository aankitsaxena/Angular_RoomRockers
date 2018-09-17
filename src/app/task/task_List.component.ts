import { Component, OnInit } from "@angular/core";
import { Task } from "./task";
import { TaskService } from "./taskService";

@Component({
    selector: 'taskList',
    templateUrl: './task_List.component.html'
})

export class TaskListComponent implements OnInit{
    taskList: Task[];

    constructor(private taskService : TaskService) { 
    }

    ngOnInit() : void {
        this.taskList = this.taskService.getAllTask();
    }
}