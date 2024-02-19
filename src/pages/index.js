import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <a href="https://aug.manaba.jp/ct/home">manaba</a>
        <a href="https://aitaasv.ashitech.ac.jp/aaa_web/cl0010.aspx">AAA</a>

        <Link href="/">ホーム</Link>
        <Link href="/search">シラバス検索</Link>
        <Link href="/about">AUinfoの使い方</Link>
      </div>
    </main>
  );
}
