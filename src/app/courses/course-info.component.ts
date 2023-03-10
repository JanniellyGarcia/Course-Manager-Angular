import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {
  course: Course;
  courseId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}
  ngOnInit(): void | undefined {
    this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.courseService.retrievebyId(this.courseId).subscribe({
      next: (course) => (this.course = course),
      error: (err) => console.log('Error', err),
    });
  }
  save(): void {
    this.courseService.save(this.course).subscribe({
      next: (course) => console.log('Save with sucess', course),
      error: (err) => console.log('Error', err),
    });
  }
}
