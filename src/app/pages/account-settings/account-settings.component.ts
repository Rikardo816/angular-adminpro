import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit{
  
  public linkTheme = document.querySelector('#theme');
     

  constructor(
    private settingsService: SettingsService
  ) { }
  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  chageTheme(theme: string){
    this.settingsService.chageTheme(theme);
  }

}
