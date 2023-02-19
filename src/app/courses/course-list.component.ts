import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filteredCourse: Course[] = [];

  _courses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourse = this._courses;
      },
      error: err =>
      console.log('Error', err)

    })
  };

  deleteById(courseId:number): void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with sucess')
        this.retrieveAll();
      },
      error: err =>
      console.log('Not Deleted', err)

    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourse = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }
  get filter() {
    return this._filterBy;
  }
}
