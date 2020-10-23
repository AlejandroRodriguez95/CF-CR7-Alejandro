import { Component, OnInit } from '@angular/core';
import { locations } from '../locations';


@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
locations = locations;
  constructor() { }

  ngOnInit(): void {
  }

}
