import { Component, OnInit } from '@angular/core';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html'
})
export class DoughnutHttpComponent implements OnInit {

  constructor(private gs: GraphicsService) { }

  ngOnInit(): void {
    this.gs.getSocialMediaUsers().subscribe(data=>{
      console.log(data);
      
    });
  }

}
