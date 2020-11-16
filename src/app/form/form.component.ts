import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private postsService: PostsService) {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.postsService.addPost(this.form.value);
    this.form.reset();
  }


}
