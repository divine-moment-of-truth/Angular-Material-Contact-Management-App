import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatGridAvatarCssMatStyler } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contactmanager-app',
  templateUrl: 'contactmanager-app.component.html',
  styleUrls: []
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, santizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(santizer.bypassSecurityTrustResourceUrl('assets/Avatars.svg'));
   }

  ngOnInit() {
  }

}
