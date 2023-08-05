import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import EditArea from "./EditArea";
import axios from "axios";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const noteEditAreaRef = useRef(null);
  const notesSidebarRef = useRef(null);

  useEffect(() => {
    document.getElementById("navTitle").innerHTML = "Notes";
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const result = await axios.get("http://localhost:8080/notes");
    setNotes(result.data);
  };

  const onAddNote = async () => {
    const newNote = {
      noteTitle: "Untitled Note",
      noteBody: "",
    };

    var addedNote = await axios.post("http://localhost:8080/notes", newNote);
    loadNotes();
    setActiveNote(addedNote.data.id);
  };

  const onDeleteNote = async (idToBeDeleted) => {
    await axios.delete(`http://localhost:8080/notes/${idToBeDeleted}`);
    loadNotes();
  };

  const onUpdate = async (updatedNote) => {
    await axios.put(
      `http://localhost:8080/notes/${activeNote}`,
      updatedNote
    );
    loadNotes();
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const openNoteEditArea = () => {
    if (noteEditAreaRef.current && window.innerWidth < 1024) {
      noteEditAreaRef.current.classList.remove("hidden");
      notesSidebarRef.current.classList.add("hidden");
    }
  };

  const closeNoteEditArea = () => {
    if (window.innerWidth < 1024) {
      noteEditAreaRef.current.classList.add("hidden");
    }
    notesSidebarRef.current.classList.remove("hidden");
  };

  return (
    <section className="notes-app flex flex-col lg:flex-row pt-16 dark:bg-slate-900 before:absolute before:top-0 before:left-0 before:bottom-20 before:right-0 before:bg-slate-900 before:-z-[1] before:dark:z-[1]" style={{ height: 'calc(100vh - 5rem)' }}>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        activeNote={activeNote}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
        openNoteEditArea={openNoteEditArea}
        notesSidebarRef={notesSidebarRef}
      />
      <EditArea
        activeNote={getActiveNote()}
        onUpdate={onUpdate}
        setActiveNote={setActiveNote}
        closeNoteEditArea={closeNoteEditArea}
        noteEditAreaRef={noteEditAreaRef}
      />
    </section>
  );
}
