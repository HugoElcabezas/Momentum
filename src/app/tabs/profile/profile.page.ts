import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  posts = [
    {
      imageUrl: 'https://i.ytimg.com/vi/Bw2l0w5mu7k/hqdefault.jpg',
      username: 'hugoelcabezas',
      likes: 1200,
      description: 'El mejor youtubber de todos'
    },
    {
      imageUrl: 'https://wallpapershome.com/images/wallpapers/halo-infinite-3840x2160-e3-2018-screenshot-4k-19266.jpg',
      username: 'MasterChief',
      likes: 10000000,
      description: 'Spartan of spartans'
    }
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToPost(postId: string) {
    this.navCtrl.navigateForward(['tabs', 'profile', 'post', postId]);
    //[routerLink]="['post','1']"
  }

}
