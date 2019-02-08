import React from "react";

const ViewNotebook = props => {
  const addPage = <button onClick={props.addNoteHandler}>Add Page</button>;
  const viewNotes = (
    <button onClick={props.viewNotesHandler}>View Notes</button>
  );
  const createFlashCards = (
    <button onClick={props.createFlashCardHandler}>Create Flashcards</button>
  );
  const viewFlashCards = (
    <button onClick={props.ViewFlashCardHandler}>View Flashcards</button>
  );
  return (
    <div>
      <p>Hi I am just a notebook called {props.title}</p>
      {props.pageCount > 0 ? (
        <div>
          {viewNotes}
          {!props.flashcards ? createFlashCards : viewFlashCards}
        </div>
      ) : (
        addPage
      )}
    </div>
  );
};

export default ViewNotebook;
