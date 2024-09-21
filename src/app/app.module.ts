import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MainDrawerComponent } from "./components/main-drawer/main-drawer.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { ErrorSnackbarComponent } from "./components/error-snackbar/error-snackbar.component";
import { SuccessSnackbarComponent } from "./components/success-snackbar/success-snackbar.component";
import { AppService } from "./app.service";

//  App components
import { UserAccountComponent } from "./components/entities/user-account/user-account.component";
import { IssueComponent } from "./components/entities/issue/issue.component";
import { CommentComponent } from "./components/entities/comment/comment.component";
import { UserAccountFormComponent } from "./components/entities/user-account-form/user-account-form.component";
import { IssueFormComponent } from "./components/entities/issue-form/issue-form.component";
import { CommentFormComponent } from "./components/entities/comment-form/comment-form.component";

//  Material modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        AppComponent,
        MainDrawerComponent,
        MainContentComponent,
        ErrorSnackbarComponent,
        SuccessSnackbarComponent,
        UserAccountComponent,
        IssueComponent,
        CommentComponent,
        UserAccountFormComponent,
        IssueFormComponent,
        CommentFormComponent,
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        MatTableModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSnackBarModule,
    ],
    providers: [provideAnimationsAsync(), AppService, HttpService],
    bootstrap: [AppComponent],
})
export class AppModule {}
