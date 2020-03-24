import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    //this.createPost();
    this.getPosts();
    //this.deletePost();
    //this.updatePost();
    this.getPost();
  }

  createPost() {
    const post = {
      owner: 'ajasof',
      likes: 1200,
      description: 'This was a great day'
    };

    this.postService.createPost(post).then(() => {
      console.log('Post created');
    }).catch((error) => {
      console.log(error);
    });
  }

  getPosts() {
    this.postService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }

  getPost() {
    this.postService.getPost('AziOb46t9VHVHq7aoFWQ').subscribe((post) => {
      console.log(post);
    });
  }

  deletePost() {
    this.postService.deletePost('QCUTMjZWmfgL8bptzICq').then(() => {
      console.log('Post deleted');
    }).catch((error) => {
      console.log(error);
    });
  }

  updatePost() {
    const updatedPost = {
      owner: 'Hugo',
      likes: 1000000,
      description: 'Soy la verga'
    };

    this.postService.updatePost('AziOb46t9VHVHq7aoFWQ', updatedPost).then(() => {
      console.log('Post updated');
    }).catch((error) => {
      console.log(error);
    });
  }

}
