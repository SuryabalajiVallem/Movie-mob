import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable ,  BehaviorSubject ,  Subject } from 'rxjs';

@Injectable()
export class SupplierManagementService implements Resolve<any>
{

    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */

    constructor(private http: HttpClient)
    {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        let filterData = {
            'status':'pending', //approved, //rejected
            'search':'',
            'limit':5,
            'page':1,
            'company_name':'',
            'category_tree':''
        }
        return new Promise((resolve, reject) => {

            Promise.all([
            ]).then(
                ([files]) => {
                },
                reject
            );
        });
    }

    singleSupplier(scrollIndex): Promise<any>{
        let url = `https://akrp-server.herokuapp.com/movies?p=${scrollIndex}`
        url = decodeURIComponent(url)
        return new Promise((resolve, reject) => {
                this.http.get(url)
                    .subscribe((response: any) => {
                        resolve(response);
                    }, err=>{
                        reject
                    });
            }
        );
    }
    getMovieInfo(movieId){
        return new Promise((resolve, reject) => {
            let url = `https://akrp-server.herokuapp.com/movies/${movieId}`
            this.http.get(url)
                .subscribe((response: any) => {
                    resolve(response);
                }, err=>{
                    reject
                });
        }
    );
    }

}
