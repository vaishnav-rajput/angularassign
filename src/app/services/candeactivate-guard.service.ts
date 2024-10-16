import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProductUpdateComponent } from "../reusableComponents/product-update/product-update.component";

export class CanDeactivateGuardService implements CanDeactivate<ProductUpdateComponent>{
    canDeactivate(component: ProductUpdateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('CanDeactivateGuardService is being called');
        return component.canExit()
    }
}