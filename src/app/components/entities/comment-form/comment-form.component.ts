import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "../../../app.service";

@Component({
    selector: "app-comment-form",
    templateUrl: "./comment-form.component.html",
    styleUrl: "./comment-form.component.scss",
})
export class CommentFormComponent implements OnInit {
    editMode: boolean = true;
    entityId: string | null = null;
    entity: any = {
        content: null,
        issueId: null,
        authorId: null,
    };

    constructor(
        private httpService: HttpService,
        private router: Router,
        private route: ActivatedRoute,
        private appService: AppService
    ) {}

    ngOnInit() {
        this.entityId = this.route.snapshot.params["id"];
        if (!this.entityId) {
            this.editMode = false;
            return;
        }
        this.httpService
            .getRequest("comment", this.entityId)
            .then((data: any) => {
                if (data) {
                    this.entity = data;
                    this.editMode = true;
                }
            })
            .catch((error: any) => {
                this.appService.openErrorSnackBar("Could not load entities");
            });
    }

    public onChange(property: string, event: any): void {
        this.entity[property] = event.target.value;
    }

    public onSave(): void {
        this.httpService
            .postRequest("comment", this.entity, this.entityId)
            .then((data: any) => {
                if (data) {
                    this.appService.openConfirmSnackBar("Entity saved");
                    this.router.navigate(["/comment"]);
                }
            })
            .catch((error: any) => {
                this.appService.openErrorSnackBar("Could not save entity");
            });
    }

    public onDelete(): void {
        this.httpService
            .deleteRequest("comment", this.entityId)
            .then((data: any) => {
                this.appService.openConfirmSnackBar("Entity deleted");
                this.router.navigate(["/comment"]);
            })
            .catch((error: any) => {
                this.appService.openErrorSnackBar("Could not delete entity");
            });
    }
}
