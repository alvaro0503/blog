import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

    this.postsService.getAllPosts()
      .then(post => {
        this.arrPosts = post;
      })
  }

  async onChange($event) {
    if ($event.target.value === 'Todas las categorias') {
      this.arrPosts = await this.postsService.getAllPosts();
    } else {
      this.arrPosts = await this.postsService.getByCategory($event.target.value);
    }
  }

  onClick(pIndice) {
    this.postsService.deletePost(pIndice)
  }

}
