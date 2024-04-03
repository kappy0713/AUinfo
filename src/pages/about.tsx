import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
    return (
      <>
        <header className='bg-gray-700 text-white p-4 flex justify-between fixed top-0 w-full z-10'>
          <div>
            <Link href="/">あしナビ</Link>
          </div>
          <div>
            <Link href="/">シラバス検索　</Link>
            <Link href="/about">あしナビの使い方</Link>
          </div>
        </header>
        <main className='flex-grow min-h-screen pb-14 pt-16'>
          <h1 className='text-4xl m-2'>あしナビの使い方</h1>
          <p className='text-xl m-2'>あしナビは足利大学の関連情報をまとめたWebアプリケーションです。本サイトをブックマークして教育支援システムや時刻表のショートカットにお使いください</p>
          <h2 className='text-3xl m-2'>時刻表</h2>
            <p className='text-xl m-2'>バスと山前駅・足利市駅の時刻表をまとめています。</p>
            <p className='text-xl m-2'>発着までの時間が一目で分かるようにしています。</p>
            <p className='text-xl m-2'>※駅の時刻表は遅延には一切対応していませんので注意してください※</p>
          <h2 className='text-3xl m-2'>シラバス検索</h2>
            <p className='text-xl m-2'>非公式のシラバス検索です。</p>
            <p className='text-xl m-2'>科目名に含まれる文字列の部分一致検索をします。</p>
            <p className='text-xl m-2'>現在2024年度版への移行作業をしているため、シラバス検索ができません。</p>
          <h2 className='text-3xl m-2'>問い合わせ</h2>
            <p className='text-xl m-2'>あしナビに関する問い合わせは管理者X(旧Twitter)までご連絡ください</p>
            <a href='https://twitter.com/syunsuke__03' target='_blank'><FaXTwitter className='w-10 h-10 pl-2'/></a>
        </main>
        <footer>
          <p className='bg-gray-700 text-white text-center p-2 fixed bottom-0 w-full'>© 2024 あしナビ</p>
        </footer>
      </>
    );
}