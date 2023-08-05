import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function EditArea({
  activeNote,
  onUpdate,
  setActiveNote,
  closeNoteEditArea,
  noteEditAreaRef,
}) {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  useEffect(() => {
    if (activeNote) {
      setNoteTitle(activeNote.noteTitle);
      setNoteBody(activeNote.noteBody);
    }
  }, [activeNote]);

  const handleNoteTitleChange = (event) => {
    setNoteTitle(event.target.value);
  }

  const handleNoteBodyChange = (event) => {
    setNoteBody(event.target.value);
  }

  const handleCancel = () => {
    closeNoteEditArea();
    if (window.innerWidth > 1024) {
      setActiveNote(false);
    }
  }

  const onSave = () => {
    onUpdate({ noteTitle, noteBody });
  };

  if (!activeNote) {
    return (
      <div className="note-edit-area w-full lg:w-[630px] xl:w-[720px] 2xl:w-[900px] lg:ml-5 lg:mr-auto h-full pt-11 hidden lg:flex">
        <div className="w-11/12 h-[97%] mx-auto rounded-xl mb-2 mt-1 flex flex-col text-center justify-center z-10">
          <h2 className="text-3xl font-semibold text-slate-500 py-3">
            No Note Selected
          </h2>
          <p className="text-xl text-slate-500 py-3">
            Select a Note to edit it.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div
      id="noteEditArea"
      ref={noteEditAreaRef}
      className="note-edit-area flex flex-col w-full lg:w-[630px] xl:w-[720px] 2xl:w-[900px] lg:ml-5 lg:mr-auto transition-all duration-300 h-full pt-11 hidden lg:flex z-10 drop-shadow-2xl"
    >
      <form
        id="editNote"
        className="w-11/12 h-[97%] mx-auto rounded-xl mb-2 mt-1 flex flex-col"
      >
        <input
          type={"text"}
          id="noteTitle"
          name="noteTitle"
          value={noteTitle}
          placeholder="Note Title"
          className="w-[96%] mx-auto mt-4 px-2 py-1 text-lg font-semibold shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          onChange={handleNoteTitleChange}
        />
        <textarea
          id="noteBody"
          name="noteBody"
          placeholder="Enter your note here."
          className="w-[96%] h-[85%] mx-auto mt-3 px-2 py-1 font-semibold resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          value={noteBody}
          onChange={handleNoteBodyChange}
        ></textarea>
        <div className="btn-action flex justify-end mt-3 mr-3">
          <button
            type="submit"
            id="saveNote"
            className="bg-green-600 px-2 py-1 mx-1 rounded-lg text-white font-semibold hover:scale-110"
            onClick={onSave}
          >
            Save
          </button>
          <Link
            to="/notes"
            id="cancelNote"
            className="bg-red-600 px-2 py-1 mx-1 rounded-lg text-white font-semibold hover:scale-110"
            onClick={handleCancel}
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
