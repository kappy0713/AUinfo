import Link from 'next/link';

export default function About() {
    return (
        <div>
          <header>
              <Link href="/">あしナビ</Link>
              <Link href="/search">シラバス検索</Link>
              <Link href="/about">あしナビの使い方</Link>
          </header>
          <h1>あしナビの使い方</h1>
        </div>
    );
}