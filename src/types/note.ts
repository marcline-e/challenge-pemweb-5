export type Category = "Pribadi" | "Kuliah" | "Pekerjaan" | "Lainnya";

export const CATEGORIES: Category[] = ["Pribadi", "Kuliah", "Pekerjaan", "Lainnya"];

export interface Note {
  id: number;
  title: string;
  content: string;
  category: Category;
}

// Data yang diisi user di form (tanpa id, id dibuat otomatis di App)
export type NewNote = Omit<Note, "id">;
