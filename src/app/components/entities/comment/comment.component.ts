import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-comment",
    templateUrl: "./comment.component.html",
    styleUrl: "./comment.component.scss",
})
export class CommentComponent implements OnInit {
    dataSource: any[] = [];
    displayedColumns: string[] = ["content", "issue", "author"];

    constructor(private httpService: HttpService, private router: Router) {}

    ngOnInit() {
        this.httpService
            .getRequest("comment")
            .then((data: any) => {
                this.dataSource = data;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    public onRowClick(row: any) {
        this.router.navigate(["/comment", row.id]);
    }

    public onCreate(): void {
        this.router.navigate(["/create/comment"]);
    }
}
