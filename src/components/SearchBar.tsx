interface SearchBarProps {
  value: string;
  onChange: (keyword: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="search-bar"
      type="search"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder="Cari berdasarkan judul..."
    />
  );
}
