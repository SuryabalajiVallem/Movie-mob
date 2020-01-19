import { Component, OnInit } from '@angular/core';
import { SupplierManagementService } from 'src/app/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieInfo:any;
  constructor(
    private movieService:SupplierManagementService,
    private activeRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    let movieId = this.activeRoute.snapshot.params.sid
    this.getMovieDetails(movieId)
  }
  getMovieDetails(movieId){
    this.movieService.getMovieInfo(movieId).then((res:any)=>{
      this.movieInfo = res
      console.log('movieInfo',JSON.parse(JSON.stringify(this.movieInfo[0].genres))[0]['name'])
    })
  }
  getParsedData(data){
    return JSON.parse(data.replace(/'/g, '"'))
  }

}
