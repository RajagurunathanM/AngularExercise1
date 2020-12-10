import {Component} from '@angular/core';

@Component(
  {
    selector:'dashboard',
    template:`
    <div style="background-image: linear-gradient(black); color:red">
      <h1>Click the navbar components to see the magic</h1>
      <a href="https://angular.io/" ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyLY32o0R1ZXcNbDnGm1OyDe8HPoTsMB0ow&usqp=CAU' width=100% height=100% ></a>
    </div>
    `,
  }
)
export class DashboardComponent
{
  constructor()
  {

  }
}