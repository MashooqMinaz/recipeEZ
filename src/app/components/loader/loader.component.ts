import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(private loadingService:LoadingService){
    console.log(this.isLoading);

  }

  isLoading: Subject<boolean> = this.loadingService.isLoading;

}
