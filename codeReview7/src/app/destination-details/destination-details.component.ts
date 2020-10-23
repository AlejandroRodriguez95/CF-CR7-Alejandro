import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { locations } from '../locations';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss']
})
export class DestinationDetailsComponent implements OnInit {

  location: any;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.location = locations[+params.get('destinationId')];
      });
  }
}
