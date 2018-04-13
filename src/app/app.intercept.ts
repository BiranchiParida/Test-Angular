import {Injectable} from '@angular/core'
 import {HttpInterceptor,HttpHandler,HttpEvent,HttpRequest} from '@angular/common/http'
  import {Observable} from 'rxjs/Observable'

@Injectable()
 export class interceptclass implements HttpInterceptor
 {
    public  constructor()
    {

    }
   
     intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
     {

        request.clone({
            setHeaders: {
              Authorization: `Bearer "biranchi"}`
            }
          });
          return next.handle(request)

     }
 }