import db from "../Database/index.js";
function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;

    const assignments = db.assignments
      .filter((a) => a.course === cid);
      console.log(assignments,"**************???????!");
    res.send(assignments);
  });


  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssignment = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssignment);
    console.log(newAssignment, "**************???????!111");
    res.send(newAssignment);
  });

  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    console.log(aid,"**************aid");
    res.sendStatus(200);
  });



  
app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignmentIndex = db.assignments.findIndex(
      (a) => a._id === aid);
    db.assignments[assignmentIndex] = {
      ...db.assignments[assignmentIndex],
      ...req.body
    };

    console.log(aid, "**************???????!2222");
    res.sendStatus(204);
  });




}

export default AssignmentRoutes;