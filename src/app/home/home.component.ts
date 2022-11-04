import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  outNow: any;
  popMovies: any;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getOutNow();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log('trending movs', this.trendingMovies);
      });
  }

  getOutNow() {
    this.http
      .get('http://localhost:4200/assets/data/in-theatre.json')
      .subscribe((movies) => {
        this.outNow = movies;
        console.log('outNow', this.outNow);
      });
  }

  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/pop-movies.json')
      .subscribe((movies) => {
        this.popMovies = movies;
        console.log('pop movs', this.popMovies);
      });
  }
}
