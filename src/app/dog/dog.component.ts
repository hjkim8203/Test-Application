import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  ear: string;
  mouth: number;
  tail: any;
  constructor() { }

  ngOnInit(): void {

  }

}
