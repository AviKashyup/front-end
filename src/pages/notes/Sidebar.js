import React from "react";
import dayjs from "dayjs";

export default function Sidebar({
  notes,
  onAddNote,
  activeNote,
  onDeleteNote,
  setActiveNote,
  openNoteEditArea,
  notesSidebarRef,
}) {

  return (
    <div
      id="notesSidebar"
      ref={notesSidebarRef}
      className="notes-sidebar flex flex-col w-full lg:w-[320px] xl:w-[360px] 2xl:w-[450px] lg:mr-5 lg:ml-auto h-full py-5 z-10"
    >
      <div className="w-full text-center mb-2 mt-3">
        <i
          class="fa-solid fa-circle-plus fa-xl hover:scale-110 cursor-pointer"
          alt="Add a new Note"
          onClick={onAddNote}
        ></i>
      </div>
      <div className="search-notes mx-auto w-11/12 flex items-center rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light dark:bg-inherit">
        <input
          type="text"
          className="px-2 py-1 w-full rounded-lg "
          placeholder="Search Notes"
        ></input>
        <i class="fa-solid fa-magnifying-glass ml-2 mr-2 hover:scale-110 cursor-pointer"></i>
      </div>
      <div className="mx-auto mt-3 w-11/12 h-[88%] p-2 shadow-2xl dark:bg-inherit rounded-lg bg-gray-50 dark:border-2 dark:bg-gray-700 dark:border-gray-600">
        <div className="h-[99%] pl-4 p-2 m-auto mt-1 flex-col overflow-y-auto rounded-xl">
          {notes.map((note) => (
            <div
              className={`note w-full max-h-[117px] -mt-2 p-0.5 pb-2 overflow-hidden flex flex-col mb-2 border-b-2 border-slate-200 ${note.id === activeNote && "bg-orange-400 rounded-lg"
                }`}
              onClick={() => setActiveNote(note.id)}
              key={note.id}
            >
              <div className="note-head flex items-center">
                <h3
                  className="text-lg font-semibold p-0.5 mx-1 w-11/12 overflow-hidden"
                  onClick={openNoteEditArea}
                >
                  {note.noteTitle}
                </h3>
                <i
                  class="fa-solid fa-trash-can m-1 hover:scale-110 cursor-pointer"
                  onClick={() => onDeleteNote(note.id)}
                ></i>
              </div>
              <p
                className="mx-1 min-h-[18px] overflow-hidden"
                onClick={openNoteEditArea}
              >
                {note.noteBody}
              </p>
              <small className="mx-1 text-gray-500 cursor-default">
                {dayjs(note.lastModified).format("ddd, D-MMM-YYYY h:mm a")}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
