import Link from 'next/link';

export default function About() {
    return (
        <div>
            <Link href="/">ホーム</Link>
            <Link href="/search">シラバス検索</Link>
            <Link href="/about">AUinfoの使い方</Link>
            <h1>AUinfoの使い方</h1>
        </div>
    );
}