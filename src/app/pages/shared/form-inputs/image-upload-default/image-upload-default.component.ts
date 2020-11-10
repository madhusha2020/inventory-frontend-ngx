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

  @Input() id: string;
  @Input() category: string;
  @Input() image: string;
  @Input() link: string;

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

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    this.uploadImage = this.selectedFile;
    this.imageUploadControllerService.uploadImageUsingPOST(this.uploadImage, this.category, this.id).subscribe(response => {
      console.log('Image uploaded :', response);
      this.retrievedImage = 'data:image/jpeg;base64,' + response.photo;
      Swal.fire('Success', 'Employee successfully created', 'success').then(value => {
        this.router.navigate([this.link]);
      });
    });
  }
}
