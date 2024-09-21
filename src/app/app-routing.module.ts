import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainContentComponent } from "./components/main-content/main-content.component";

import { UserAccountComponent } from "./components/entities/user-account/user-account.component";
import { IssueComponent } from "./components/entities/issue/issue.component";
import { CommentComponent } from "./components/entities/comment/comment.component";
import { UserAccountFormComponent } from "./components/entities/user-account-form/user-account-form.component";
import { IssueFormComponent } from "./components/entities/issue-form/issue-form.component";
import { CommentFormComponent } from "./components/entities/comment-form/comment-form.component";

const routes: Routes = [
    {
        path: "main",
        component: MainContentComponent,
    },
    {
        path: "",
        redirectTo: "/main",
        pathMatch: "full",
    },
    {
        path: "user-account",
        component: UserAccountComponent,
    },
    {
        path: "user-account/:id",
        component: UserAccountFormComponent,
    },
    {
        path: "create/user-account",
        component: UserAccountFormComponent,
    },
    {
        path: "issue",
        component: IssueComponent,
    },
    {
        path: "issue/:id",
        component: IssueFormComponent,
    },
    {
        path: "create/issue",
        component: IssueFormComponent,
    },
    {
        path: "comment",
        component: CommentComponent,
    },
    {
        path: "comment/:id",
        component: CommentFormComponent,
    },
    {
        path: "create/comment",
        component: CommentFormComponent,
    },
    {
        path: "**",
        redirectTo: "/main",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
