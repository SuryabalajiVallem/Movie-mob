import { Component, OnInit } from '@angular/core';
import { SupplierManagementService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-stack',
  templateUrl: './movie-stack.component.html',
  styleUrls: ['./movie-stack.component.scss']
})
export class MovieStackComponent implements OnInit {
  slides:any;
  constructor(private movieService:SupplierManagementService,private router:Router) { }

  ngOnInit() {
   
  }
  

}
