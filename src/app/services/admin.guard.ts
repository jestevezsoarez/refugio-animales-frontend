import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { UserService } from "./user.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    canActivate() {
        let identity = this.userService.getIdentity();

        if (identity && identity.role == 'ROLE_ADMIN') {
            return true;
        } else {
            this.router.navigate(['/']); // Redirijo a la home
            return false;
        }
    }
}