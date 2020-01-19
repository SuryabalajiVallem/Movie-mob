import { Component, OnInit, DebugEventListener, ViewChild, Directive, ElementRef, HostListener } from '@angular/core';
import { SupplierManagementService } from 'src/app/app.service';
// const nisPackage = require('../../../../package.json');
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  slides=[];
  sum = 20;
  throttle = 50;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  scrollIndex = 1;
  columnNum = 5; //initial count
  tileSize = 230; //one tile should have this width
  @ViewChild('theContainer',{static:false}) theContainer:ElementRef;
  defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXKysz9/f3////k5OXHx8nIyMrz8/P+/v7JycvV1dfGxsjDw8Xc3N3t7e1H7rm8AAACiElEQVR4nO2asW6EMBAFfTZw4Lv8/+8mxWHjdFEoZmG2iqwtZhSk+DkvpTbT8nx8Jpd5P123/GjHNd7yowvGgdZQQz60hhryoTW8neHU5rXkNqXup3Xrp/kVcDktfd5bm9JPv/rpFnE5PdvkbV4/M5XcTpe6n641x1teU/9g87buH/Jc2of8XKb21dccbzlpSITWUEM+tIa3Mzzcb7Zp/kwt/XSp++n8Crg8p3L1SV22DrfY/XQarrwBlw/fa5hAZD7UkA+toYZ8aA1/GfYHjZ+/nu2ho0z76bwdXkVqvOVnOrxKffXHqtJP34eXrYjLw827Pzgeb7GH18mAy9MN0pOGQGgNNeRDa6ghH/ofr4l1n9dwP+jHAZdr6j8O/zHuK8MjV8Dlw28zTCAyH2rIh9ZQQz60hrcz7E82ccp4Nvds7iV6IDIfasiH1lBDPrSGNveuNjb3iIHIfKghH1pDDfnQGtrcO60yB1m2uUcMROZDDfnQGmrIh9bwdobD/SBGGc/mns09PrSGGvKhNdSQD62hzb3TKnOQZZt7xEBkPtSQD62hhnxoDW3uXW1s7hEDkflQQz60hhryoTW0uXdaZQ6ybHOPGIjMhxryoTXUkA+t4e0Mh/tBjDKezT2be3xoDTXkQ2uoIR9aQ5t7p1XmIMs294iByHyoIR9aQw350Bra3Lva2NwjBiLzoYZ8aA015ENraHPvtMocZNnmHjEQmQ815ENrqCEfWsPbGQ73gxhlPJt7Nvf40BpqyIfWUEM+tIY2906rzEGWbe4RA5H5UEM+tIYa8qE1tLl3tbG5RwxE5kMN+dAaasiH1tDm3mmVOciyzT1iIDIfasiH1lBDPrSGGvKh/2b4DfYn7/HH4UO8AAAAAElFTkSuQmCC';
  
  // nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];
  constructor(private movieService:SupplierManagementService) {
    
   }
  ngOnInit() {
    this.appendItems(1,this.sum)
  }
  ngAfterViewInit() {
    this.setColNum();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setColNum();
  }
  addItems(startIndex, endIndex, _method) {
    
    this.movieService.singleSupplier(this.scrollIndex).then(res => {
      for(let slide of res){
        slide.poster_path = 'https://image.tmdb.org/t/p/original'+slide.poster_path
      }
      this.slides = this.slides.concat(res)
    })
  }
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }
  
  prependItems(startIndex, endIndex) {
    this.scrollIndex--;
    if (this.scrollIndex == 0 ) this.scrollIndex =1
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    this.scrollIndex ++;
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    
    this.direction = 'down'
  }
  
  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
  
    this.direction = 'up';
  }
  setColNum(){
    let width = this.theContainer.nativeElement.offsetWidth;
    this.columnNum = Math.trunc(width/this.tileSize);
  }
}
