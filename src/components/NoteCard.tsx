import type { Note } from "../types/note";

interface NoteCardProps {
  note: Note;
  onDelete: (id: number) => void;
}

export function NoteCard({ note, onDelete }: NoteCardProps) {
  return (
    <article className="note-card">
      <div className="note-card-header">
        <h3>{note.title}</h3>
        <span className={`badge badge-${note.category.toLowerCase()}`}>{note.category}</span>
      </div>
      {note.content && <p>{note.content}</p>}
      <button className="btn-delete" onClick={() => onDelete(note.id)}>
        Hapus
      </button>
    </article>
  );
}
