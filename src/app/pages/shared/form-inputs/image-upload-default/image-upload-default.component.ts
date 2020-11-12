import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageUploadControllerService} from '../../../../service/rest';

@Component({
  selector: 'app-image-upload-default',
  templateUrl: './image-upload-default.component.html',
  styleUrls: ['./image-upload-default.component.scss']
})
export class ImageUploadDefaultComponent implements OnInit {

  @Input() image: string;
  @Input() defaultImage: string;
  @Input() showButton: boolean;
  @Output() changeEvent = new EventEmitter<any>();

  retrievedImage: any;
  uploadImage: Blob;
  error: string;

  constructor(private imageUploadControllerService: ImageUploadControllerService) {
  }

  ngOnInit(): void {
    this.showButton = true;
    if (this.image) {
      this.retrievedImage = 'data:image/jpeg;base64,' + this.image;
    }
  }

  onFileChanged(event) {
    this.uploadImage = event.target.files[0];

    if (this.uploadImage && this.validateSize(event)) {

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = onload => {
        this.retrievedImage = reader.result;
      };

      this.imageUploadControllerService.convertImageToBase64UsingPOST(this.uploadImage).subscribe(response => {
        console.log('Converted image :', response);
        this.changeEvent.emit(response.photo);
      });
    }
  }

  validateSize(event): boolean {
    console.log('File size', event.target.files[0].size);
    if (event.target.files[0].size <= 1000000) {
      this.error = null;
      return true;
    } else {
      console.log('File size exceeded');
      this.retrievedImage = null;
      this.error = 'File size exceeded';
      return false;
    }
  }
}
