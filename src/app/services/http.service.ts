import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {
    host = "http://localhost:8080/backend/v1";
    constructor(private http: HttpClient) {}

    public getRequest(
        table: string,
        entity: string | null = null
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http
                .get(`${this.host}/${table}${entity ? "/" + entity : ""}`)
                .subscribe({
                    next: (result) => {
                        resolve(result);
                    },
                    error: (error) => {
                        reject();
                    },
                });
        });
    }

    public postRequest(
        table: string,
        data: any,
        entity: string | null = null
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const dto = {
                id: entity,
                ...data,
            };
            this.http.post(`${this.host}/${table}`, dto).subscribe({
                next: (result) => {
                    resolve(result);
                },
                error: (error) => {
                    reject();
                },
            });
        });
    }

    public deleteRequest(table: string, entity: string | null): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.delete(`${this.host}/${table}/${entity}`).subscribe({
                next: (result) => {
                    resolve(result);
                },
                error: (error) => {
                    reject();
                },
            });
        });
    }
}
