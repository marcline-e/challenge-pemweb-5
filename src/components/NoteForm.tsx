import { useState } from "react";
import { CATEGORIES } from "../types/note";
import type { Category, NewNote } from "../types/note";

interface NoteFormProps {
  onAdd: (note: NewNote) => void;
}

export function NoteForm({ onAdd }: NoteFormProps) {
  // Controlled form: setiap input dikendalikan oleh state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Category>("Pribadi");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;

    onAdd({ title: title.trim(), content: content.trim(), category }); // Lifting state up
    setTitle("");
    setContent("");
    setCategory("Pribadi");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Tambah Catatan</h2>

      <label htmlFor="title">Judul</label>
      <input
        id="title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        placeholder="Judul catatan..."
        required
      />

      <label htmlFor="content">Isi</label>
      <textarea
        id="content"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        placeholder="Tulis isi catatan..."
        rows={4}
      />

      <label htmlFor="category">Kategori</label>
      <select
        id="category"
        value={category}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCategory(e.target.value as Category)
        }
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">Simpan</button>
    </form>
  );
}
