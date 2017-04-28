import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    //templateUrl: 'app.component.html'
    template: `
    <h1>{{title}}</h1>

    <my-heroes></my-heroes>
    `,
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';

    constructor() { }

    ngOnInit() { 

    }

}