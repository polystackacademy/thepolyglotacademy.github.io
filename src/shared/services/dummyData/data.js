import { CourseModel } from "../models/course.model";

export const COURSES = [
    new CourseModel({
      title: "Course Title",
      imageUrl: "https://picsum.photos/seed/picsum/500/281",
      courseUrl: "http://www.google.com/",
      reviewAvg: 4,
      courseDuration: 6,
      courseDurationType: "Months",
      numberOfCourses: 6,
      numberOfStudents: 453681
    }),
    new CourseModel({
      title: "Course Title",
      imageUrl: "https://picsum.photos/seed/picsum/500/281",
      courseUrl: "http://www.google.com/",
      reviewAvg: 3.2,
      courseDuration: 3,
      courseDurationType: "Hours",
      numberOfCourses: 1,
      numberOfStudents: 21
    }),
    new CourseModel({
      title: "Medium Course Title",
      imageUrl: "https://picsum.photos/seed/picsum/500/281",
      courseUrl: "http://www.google.com/",
      reviewAvg: 4.2,
      numberOfCourses: 5,
      numberOfStudents: 21
    }),
    new CourseModel({
      title: "Course Title",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      imageUrl: "https://picsum.photos/seed/picsum/500/281",
      courseUrl: "http://www.google.com/",
      reviewAvg: 3.9,
      numberOfStudents: 21
    }),
    new CourseModel({
      title: "Long Course Title Course Title Course Title Course Title Course Title",
      imageUrl: "https://picsum.photos/seed/picsum/500/281",
      courseUrl: "http://www.google.com/",
      reviewAvg: 5.0,
      courseDuration: 3,
      courseDurationType: "Hours"
    }),
    new CourseModel({
      title: "Course Title",
      imageUrl: "https://picsum.photos/seed/picsum/500/281",
      courseUrl: "http://www.google.com/",
      reviewAvg: 1.0
    })
  ];