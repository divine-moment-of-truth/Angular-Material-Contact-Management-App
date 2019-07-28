import { Observable } from 'rxjs';
import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  users: Observable<User[]>;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  // the above media matcher only runs once, so you need a listener to keep checking to see if the screen size changes
  constructor(
    zone: NgZone,
    private userService: UserService,
    private router: Router) {
      this.mediaMatcher.addListener(mql =>
        zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }

  @ViewChild(MatSidenav, { static: false } ) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    // this.users.subscribe(data => {
    //   if(data.length > 0) {
    //     this.router.navigate(['/contactmanager', data[0].id]);
    //   }
    // });

    this.router.events.subscribe(() => {
      if(this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

  // If the screen is less than or equal to 720px then return a '1' - TRUE i.e. the SCREEN IS SMALL,
  // then you want the mode to be = 'over' i.e. a small screen you want the side bar to be hidden
  // and that you want the side nav not to be open i.e. [opened] = false
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
