import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("routes");
    console.log(this.activatedRoute.snapshot.url); // array of states
    console.log(this.activatedRoute.snapshot.url[0].path);
    console.log("omer");
    console.log(this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path);
    // console.log(this.activatedRoute.snapshot.url.pop()?.path);
    console.log(this.activatedRoute.snapshot);
  }

}
