import { Component, Inject, inject } from "@angular/core";
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA,
} from "@angular/material/snack-bar";

@Component({
    selector: "app-error-snackbar",
    templateUrl: "./error-snackbar.component.html",
    styleUrl: "./error-snackbar.component.scss",
})
export class ErrorSnackbarComponent {
    snackBarRef = inject(MatSnackBarRef);
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}
