import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DogComponent } from '../dog/dog.component';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  @Input() variable2 = 'Joseph';
  @Input() mocha: DogComponent = new DogComponent();
  monitor = '';
  constructor() { }

  ngOnInit(): void {

    console.log(this.variable2);
    console.log(this.mocha.ear);

    console.log('18', this.mocha);
    console.log('paw', this.mocha.tail.paw);
    console.log('monitor', this.monitor);
    console.log('joseph is so smart');
  }

  // git status = show what branch; all files with changes
  // git diff <file name> = shows exact changes in file
  // left doubel click = copy
  // right double click = paste
  // git add <file name> = add file for commit
  // git commit -m "<message>" = commit file changes and add message
  // git push origin <branch name> = push commit to cloud server
  // q = if diff is long, come out of diff view
  // git checkout <branch name> = go to that branch
  // git fetch origin <branch name> = download branch from server ( not on local)
  // git checkout -b <branch name> = go to new branch
  // git reset HEAD = remove all files for commit
  // git add . = add all files for commit
  // cls = clear command prompt
  // git pull origin <branch name> = from different branch, get latest code from <branch name>
}
