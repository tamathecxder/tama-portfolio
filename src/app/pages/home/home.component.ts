import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  heroData: any = {};
  isLoading: boolean = false;

  // constructor(private _dataService: DataService) {
  //   this._dataService.isLoading$.subscribe((loading) => {
  //     this.isLoading = loading;
  //   });

  //   this._dataService.getHeroData().then((res) => {
  //     this.heroData = res;
  //   });
  // }

}
