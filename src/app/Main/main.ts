import { Component } from '@angular/core';
import { Student } from '../Models/Student';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})


export class Main {
  
  students:Student[]=[
    {name:"Fer",age:15,grade:"5A"}
  ];
  
  
  displayedColumns: string[] = ['name', 'age', 'grade'];
  studentDataSource = new MatTableDataSource<Student>(this.students);

}
