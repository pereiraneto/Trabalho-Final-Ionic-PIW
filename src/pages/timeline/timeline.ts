import { PostProvider } from './../../providers/post/post';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  posts: any;

  constructor(public navCtrl: NavController, public postsProvider: PostProvider, public navParams: NavParams) {
    this.postsProvider.getPosts()
      .subscribe(
        data=>{
          this.posts = data;
        },
        error=>{
          console.log(error);
        }
      )
  }

  ionViewDidLoad() {
    
  }



}
