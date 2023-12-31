import React, { useState } from "react";
import { uid } from "uid";

const Form = (props) => {
  // const [userInput, setUserInput] = useState({
  //     title: "",
  //     text: ""
  // })

  const {edit, selectedNote, toggleModal, editNote } = props;
  
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    
    if(!edit){
      
        props.addNote({
            id: uid(),
            title: title,
            text: text
        });
        setIsActiveForm(false);
    } else {
      editNote({
        id: selectedNote.id,
        title: title,
        text: text
      })
        toggleModal();
    }
    
    setText("");
    setTitle("");
  };

  const formClickHandler = () => {
    setIsActiveForm(true);
  };

  

  return (
    <div  >
      <div  className={isActiveForm ? "form-container active-form" : "form-container"} onClick={formClickHandler}>
        <form onSubmit={submitFormHandler}  className={isActiveForm ? "form" : ""} id="form">
          {isActiveForm && (
            <input
              onChange={titleChangeHandler}
              value={title}
              type="text"
              className="note-title"
              placeholder="Title"
            />
          )}

          <input
            onChange={textChangeHandler}
            value={text}
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
            {
                isActiveForm ? (
                    <div className="form-actions">
            <div className="icons">
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  add_alert
                </span>
                <span className="tooltip-text">Remind me</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  person_add
                </span>
                <span className="tooltip-text">Collaborator</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  palette
                </span>
                <span className="tooltip-text">Change Color</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  image
                </span>
                <span className="tooltip-text">Add Image</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  archive
                </span>
                <span className="tooltip-text" >Archive</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  more_vert
                </span>
                <span className="tooltip-text">More</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  undo
                </span>
                <span className="tooltip-text">Undo</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  redo
                </span>
                <span className="tooltip-text">Redo</span>
              </div>
            </div>
            <button className="close-btn">Close</button>
          </div>
                ) : (
                    <div className="form-actions">
            <div className="tooltip">
              <span className="material-icons-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
          </div>
                )
            }
          
        </form>
      </div>
    </div>
  );
};

export default Form;

{
  /* <div className="form-container inactive-form" onClick={formClickHandler}>
        <form>
          <input
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-icons-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
          </div>
        </form>
      </div> */
}
