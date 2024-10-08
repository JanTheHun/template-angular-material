import { Injectable, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ErrorSnackbarComponent } from "./components/error-snackbar/error-snackbar.component";
import { SuccessSnackbarComponent } from "./components/success-snackbar/success-snackbar.component";

@Injectable()
export class AppService {
    private _snackBar = inject(MatSnackBar);

    durationInSeconds = 2;

    openConfirmSnackBar(message: string) {
        this._snackBar.openFromComponent(SuccessSnackbarComponent, {
            duration: this.durationInSeconds * 1000,
            data: message,
            panelClass: "success-snackbar",
        });
    }

    openErrorSnackBar(message: string) {
        this._snackBar.openFromComponent(ErrorSnackbarComponent, {
            duration: this.durationInSeconds * 1000,
            data: message,
            panelClass: "error-snackbar",
        });
    }
}
