import Link from 'next/link';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 40 }
  ];

  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <Link href="/">ホーム</Link>
      <Link href="/search">シラバス検索</Link>
      <Link href="/about">AUinfoの使い方</Link>
      <h1>シラバス検索</h1>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>検索</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name} (Age: {result.age})</li>
        ))}
      </ul>
    </div>
  );
}
