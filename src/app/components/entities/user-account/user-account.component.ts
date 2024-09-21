import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-user-account",
    templateUrl: "./user-account.component.html",
    styleUrl: "./user-account.component.scss",
})
export class UserAccountComponent implements OnInit {
    dataSource: any[] = [];
    displayedColumns: string[] = ["loginname", "email", "displayName"];

    constructor(private httpService: HttpService, private router: Router) {}

    ngOnInit() {
        this.httpService
            .getRequest("user-account")
            .then((data: any) => {
                this.dataSource = data;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    public onRowClick(row: any) {
        this.router.navigate(["/user-account", row.id]);
    }

    public onCreate(): void {
        this.router.navigate(["/create/user-account"]);
    }
}
