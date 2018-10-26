import { Component } from '@angular/core';
import { Student } from '../Models/Student';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})


export class Main {

  students: any[] = [
    { name: "Fer", age: 15, grade: "5A" },
    { name: "Fer2", age: 16, grade: "6A" },
    { name: "Fer3", age: 17, grade: "N/A" }
    
  ];
  classTable:string='table-format2';
  newStuden: Student = new Student;
  displayedColumns: string[] = ['name', 'age', 'grade','options'];
  studentDataSource = new MatTableDataSource<Student>(this.students);
  boolTable:boolean=true;
  statusTable:string="Visible";
  widthTable:string='100%';
  heightImage:number=300;
  widthImage:number=450;
  AddStudent() {
    this.students.push(this.newStuden);
    this.newStuden=new Student();
    this.updateTable();
  }

  deleteStudent(Student: Student){
    let index = this.students.indexOf(Student);
    if(index!=-1){
      this.students.splice(index,1);
    }
    this.updateTable();
  }
  editStudent(Student: Student){
    let index = this.students.indexOf(Student);
    console.log(Student);
    this.students[index]=this.newStuden;
    
    this.updateTable();
  }

  updateTable(){
    this.newStuden=new Student();
    this.studentDataSource.data=this.students;
  }

  VisibleTable(){
    if(this.boolTable==true){
      this.boolTable=false;
      this.statusTable="Invisible";
    }else{
      this.boolTable=true;
      this.statusTable="Visible";
    }
  }
  changeTableStyle(){
    if(this.classTable=='table-format2'){
      this.classTable='table-format';
    }else{
      this.classTable='table-format2';
    }
  }
}
