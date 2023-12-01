import Database from "../Database/index.js";
function QuizesRoutes(app) {
  app.get("/api/tests", (req, res) => {
    // const { cid } = req.params;

    const tests = Database.tests;
      console.log(tests,"**************???????!");
    res.send(tests);
  });


}

export default QuizesRoutes;


// import Database from "../Database/index.js";
// function CourseRoutes(app) {
//   app.get("/api/courses", (req, res) => {
//     const courses = Database.courses;
//     res.send(courses);
//   });