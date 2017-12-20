import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from './user';

//the URL's called from this service all have these elements
const urlBase = 'http://prs.doudsystems.com/';
const mvcCtrl = 'Users/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class UserService {

	list(): Promise<User[]> {
		return this.http.get(url+"List")
			.toPromise()
			.then(resp => resp.json() as User[])
			.catch(this.handleError);
	}

    get(id): Promise<User> {
      return this.http.get(url+'Get?id=' + id)
      .toPromise()
      .then(resp => resp.json() as User)
      .catch(this.handleError);
    }

     change(user: User): Promise<any>{
    // This function requires the user to be passed in, so we can change it
      //Because we are making a change, just like when we use the Postman app,
      //we need to use "post" instead of "get"
      return this.http.post(url+'Change', user)
      .toPromise()
      //The .then determines what a Promise returns, in this case, a specified user
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    add(user: User): Promise<any>{
      return this.http.post(url+'Add', user)
      .toPromise()
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }

    remove(user: User): Promise<any>{
      return this.http.post(url+'Remove', user)
      .toPromise()
      .then(resp => resp.json() || {})
      .catch(this.handleError);
  }	

	private handleError(error:any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}

  constructor(private http: Http) { }

}