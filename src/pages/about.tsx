import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function About() {
    return (
      <>
        <header>
          <Link href="/">あしナビ</Link>
          <Link href="/search">シラバス検索</Link>
          <Link href="/about">あしナビの使い方</Link>
        </header>
        <>
          <h1>あしナビの使い方</h1>
          <h2>シラバス検索</h2>
            <p>非公式のシラバス検索です。</p>
            <p>「数学」や「物理」などの曖昧なワードでの検索も可能になっています</p>
          <h2>問い合わせ</h2>
            <p>あしナビに関する問い合わせは管理者X(旧Twitter)までご連絡ください</p>
        </>
        <footer>
          <p>© 2024 あしナビ</p>
        </footer>
      </>
    );
}