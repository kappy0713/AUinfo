import Link from 'next/link';
import React,{useEffect, useState} from 'react';
import subjects from './subjects';
import 'tailwindcss/tailwind.css';
import {flexRender,getCoreRowModel,useReactTable,} from '@tanstack/react-table';

type subject = {
  name: string;
  term: string;
  num: number;
  year: number;
  teacher: string;
  group: string;
}

export default function Search() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<subject[]>([]);

  const columns = [
    {
      accessorKey: 'name',
      header: '科目名'
    },
    {
      accessorKey: 'term',
      header: '開講期間'
    },
    {
      accessorKey: 'num',
      header: '単位数'
    },
    {
      accessorKey: 'year',
      header: '学年'
    },
    {
      accessorKey: 'teacher',
      header: '担当教員'
    },
    {
      accessorKey: 'group',
      header: '科目群'
    }
  ];

  const table = useReactTable({
    data: subjects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    setResults(subjects);
  }, []);

  const handleSearch = () => {
    const filteredResults = subjects.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };


  return (
    <>
      <header className='bg-gray-700 text-white p-4 flex justify-between fixed top-0 w-full z-10'>
        <div>
          <Link href="/">あしナビ</Link>
        </div>  
        <div>
          <Link href="/search">シラバス検索</Link>
          <Link href="/about">あしナビの使い方</Link>
        </div>     
      </header>
      <main className='flex-grow min-h-screen pb-14 pt-16'>
        <h1>シラバス検索(2023年度版)</h1>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 font-sans"/>
        <button onClick={handleSearch}>検索</button>
        <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-400 p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-400 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        <a href="https://aitaasv.ashitech.ac.jp/aaa_web/syllabus/se0010.aspx?me=EU&opi=mt0010">公式シラバス</a>
      </main>
      <footer className='bg-gray-700 text-white text-center p-2 fixed bottom-0 w-full'>
        <p>© 2024 あしナビ</p>
      </footer>
    </>
  );
}