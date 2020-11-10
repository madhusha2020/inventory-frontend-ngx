import {Component, Input, OnInit} from '@angular/core';
import {ImageUploadControllerService} from '../../../../service/rest';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image-upload-default',
  templateUrl: './image-upload-default.component.html',
  styleUrls: ['./image-upload-default.component.scss']
})
export class ImageUploadDefaultComponent implements OnInit {

  @Input() image: string;
  retrievedImage: any;
  selectedFile: any;
  uploadImage: Blob;

  constructor(private imageUploadControllerService: ImageUploadControllerService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.image) {
      this.retrievedImage = 'data:image/jpeg;base64,' + this.image;
    }
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = onload => {
        this.retrievedImage = reader.result;
      };
    }
  }

  onUpload(category: string, id: string, eventName: string, link: string) {

    console.log(this.selectedFile);
    this.uploadImage = this.selectedFile;

    message = '{0} successfully {1}';
    message.replace('{0}', category);
    message.replace('{1}', eventName);

    this.imageUploadControllerService.uploadImageUsingPOST(this.uploadImage, category, id).subscribe(response => {
      console.log('Image uploaded :', response);
      this.retrievedImage = 'data:image/jpeg;base64,' + response.photo;
      Swal.fire('Success', message, 'success').then(value => {
        this.router.navigate([link]);
      });
    });
  }
}
