import { Component, OnInit } from '@angular/core';
import {ImageService} from '../shared/image.service';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
images: any[];

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
  }
handleSuccess(data){
this.images=data.hits
}


searchImages(query:string){
  return this._imageService.getImage(query).subscribe(
    data=>this.handleSuccess(data),
    error=>console.log(error),
    ()=>console.log("Request Complete"));
}

}
