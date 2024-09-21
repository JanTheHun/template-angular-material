import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-main-drawer",
    templateUrl: "./main-drawer.component.html",
    styleUrl: "./main-drawer.component.scss",
})
export class MainDrawerComponent {
    constructor(private router: Router) {}

    tables: string[] = ["user-account", "issue", "comment"];

    public onNavigate(table: string) {
        this.router.navigate([table]);
    }
}
