export function CourseModel({ title, description, imageUrl, courseUrl, reviewAvg, numberOfStudents, courseDuration, courseDurationType, numberOfCourses }) {
    this.title = title || '';
    this.description = description || '';
    this.imageUrl = imageUrl || '';
    this.reviewAvg = reviewAvg || 0;
    this.courseUrl = courseUrl || '';
    this.numberOfStudents = numberOfStudents || 0;
    this.courseDuration = courseDuration || 0;
    this.courseDurationType = courseDurationType || '';
    this.numberOfCourses = numberOfCourses || 0;
}

CourseModel.prototype.specialty = "none";