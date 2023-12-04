import { useState } from "react";


const Note = (props) => {
    const { toggleModal, note, setSelectedNote } = props;
    const [isHover, setIsHover] = useState(false);

    const deleteNoteHandler = () =>{
        props.deleteNote(note.id)
      }
    const noteClickHandler = () => {
        toggleModal();
        setSelectedNote(note);
    }
    // useEffect(() = {
        
    // })
    
    return (
        
                <div className="note" onClick={noteClickHandler} onMouseOver={() => { setIsHover(true)}} onMouseOut={() => { setIsHover(false)}}>
                <span className="material-icons check-circle" style={{visibility: isHover ? "visible" : "hidden"}}>check_circle</span>
                <div className="title">{note.title}</div>
                <div className="text">{note.text}</div>
                 <div className="note-footer" style={{visibility: isHover ? "visible" : "hidden"}}>
                    <div className="tooltip">
                    <span className="material-icons-outlined hover small-icon"
                        >add_alert</span
                    >
                    <span className="tooltip-text">Remind me</span>
                    </div>
                    <div className="tooltip">
                    <span className="material-icons-outlined hover small-icon"
                        >person_add</span
                    >
                    <span className="tooltip-text">Collaborator</span>
                    </div>
                    <div className="tooltip">
                    <span className="material-icons-outlined hover small-icon"
                        >palette</span
                    >
                    <span className="tooltip-text">Change Color</span>
                    </div>
                    <div className="tooltip">
                    <span className="material-icons-outlined hover small-icon"
                        >image</span
                    >
                    <span className="tooltip-text">Add Image</span>
                    </div>
                    <div className="tooltip">
                    <span className="material-icons-outlined hover small-icon" 
                            onClick={deleteNoteHandler}
                        >archive</span
                    >
                    <span className="tooltip-text">Archive</span>
                    </div>
                    <div className="tooltip">
                    <span className="material-icons-outlined hover small-icon"
                        >more_vert</span
                    >
                    <span className="tooltip-text">More</span>
                    </div>
                </div>
            </div>
        )
}
 
export default Note;