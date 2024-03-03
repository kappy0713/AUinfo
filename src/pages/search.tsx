import Link from 'next/link';
import React from 'react';
import subjects from './subjects';
import 'tailwindcss/tailwind.css';

interface subject {
  name: string;
  term: string;
  num: number;
  year: number;
  teacher: string;
  group: string;
}

export default function Search() {
  const [query, setQuery] = React.useState<string>('');
  const [results, setResults] = React.useState<subject[]>([]);

  const handleSearch = () => {
    const filteredResults = subjects.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <>
      <header>
        <Link href="/">あしナビ</Link>
        <Link href="/search">シラバス検索</Link>
        <Link href="/about">あしナビの使い方</Link>
      </header>
      <>
        <h1>シラバス検索(2023年度版)</h1>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500'/>
        <button onClick={handleSearch}>検索</button>
        <ul>
          {results.map((result, index) => (
            <li key={index}>科目名: {result.name}  開講期間: {result.term}  単位数: {result.num}単位  配当年: {result.year}年次  担当教員: {result.teacher}  科目群: {result.group}</li>
          ))}
        </ul>
        <a href="https://aitaasv.ashitech.ac.jp/aaa_web/syllabus/se0010.aspx?me=EU&opi=mt0010">公式シラバス</a>
      </>
      <footer>
        <p>© 2024 あしナビ</p>
      </footer>
    </>
  );
}