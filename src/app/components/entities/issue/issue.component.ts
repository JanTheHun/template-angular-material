import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-issue",
    templateUrl: "./issue.component.html",
    styleUrl: "./issue.component.scss",
})
export class IssueComponent implements OnInit {
    dataSource: any[] = [];
    displayedColumns: string[] = [
        "title",
        "description",
        "status",
        "reporter",
        "assignee",
    ];

    constructor(private httpService: HttpService, private router: Router) {}

    ngOnInit() {
        this.httpService
            .getRequest("issue")
            .then((data: any) => {
                this.dataSource = data;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    public onRowClick(row: any) {
        this.router.navigate(["/issue", row.id]);
    }

    public onCreate(): void {
        this.router.navigate(["/create/issue"]);
    }
}
