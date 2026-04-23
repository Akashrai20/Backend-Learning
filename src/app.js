// server ko create krna
const express = require("express");
const noteModel = require("./model/note.model");

const app = express();

app.use(express.json());
//const notes = [];
// app.post("/notes", (req, res) => {
//   notes.push(req.body);

//   res.status(201).json({
//     message: "Note created successfully",
//   });
// });

// app.delete("/notes/:index", (req, res) => {
//   const index = req.params.index;

//   delete notes[index];

//   res.status(200).json({
//     message: "Note delete successfully",
//   });
// });

// app.get("/notes", (req, res) => {
//   res.status(200).json({
//     message: "Notes fetched successfully",
//     notes: notes,
//   });
// });

// app.patch("/notes/:index", (req, res) => {
//   const index = req.params.index;
//   const description = req.body.description;

//   notes[index].description = description;

//   res.status(200).json({
//     message: "Note updated successfully",
//   });
// });

// Storing data inside the database not into array
/*
post/notes => create a note in db
get/notes => get all notes from db
delete/notes/:id => delete a note from db
patch/notes/:id => update a note in db
*/

app.post("/notes", async (req, res) => {
  const data = req.body; // {title, description}

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(200).json({
    message: "Note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // give the data in the form of arr of object[]

  res.status(200).json({
    message: "Note fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  await noteModel.findByIdAndUpdate({ _id: id }, { description: description });
  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = app;
