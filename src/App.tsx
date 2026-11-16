import { useState } from "react";
import { NoteForm } from "./components/NoteForm";
import { NoteCard } from "./components/NoteCard";
import { SearchBar } from "./components/SearchBar";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { NewNote, Note } from "./types/note";

export default function App() {
  // State utama disimpan di parent, otomatis tersimpan ke localStorage
  const [notes, setNotes] = useLocalStorage<Note[]>("notes", []);
  const [search, setSearch] = useState("");

  const addNote = (newNote: NewNote) => {
    const note: Note = { id: Date.now(), ...newNote };
    setNotes([note, ...notes]); // immutable: buat array baru
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Filter berdasarkan judul (tidak case-sensitive)
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <header>
        <h1>Papan Catatan</h1>
        <p className="subtitle">{notes.length} catatan tersimpan</p>
      </header>

      <div className="layout">
        <NoteForm onAdd={addNote} />

        <section className="note-list">
          <SearchBar value={search} onChange={setSearch} />

          {notes.length === 0 ? (
            <p className="empty">Belum ada catatan. Tambahkan lewat form di samping.</p>
          ) : filteredNotes.length === 0 ? (
            <p className="empty">Tidak ada catatan dengan judul "{search}".</p>
          ) : (
            filteredNotes.map((note) => (
              <NoteCard key={note.id} note={note} onDelete={deleteNote} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}
