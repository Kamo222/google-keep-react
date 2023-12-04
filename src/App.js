import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [notes, setNotes] = useState([{
    id: 234342,
    title: "yes God",
    text: "yebo nkosi"
  }]);

  const addNote = (note) => {

    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  const editNote = (selecteddNote) => {
    const editedNote = notes.map((note) => {
      if(note.id === selecteddNote.id){
        note.title = selecteddNote.title;
        note.text = selecteddNote.text;
      }

      return note;
    })
    
    setNotes(editedNote);
  } 
  
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id)
    });
  }

  const toggleModal = () => {
    setIsModalOpen(prevState => {
      return !prevState;
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} setIsmodalopen={setIsModalOpen} toggleModal={toggleModal} setSelectedNote={setSelectedNote}/>
      {
        isModalOpen && (
          <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>
        )
      }
      
    </div>
  );
}

export default App;
