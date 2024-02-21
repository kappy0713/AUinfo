import Image from "next/image";
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

const busSchedule = ['13:00', '14:00', '15:00'];
const trainSchedule = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

export default function Home() {
  const Clock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const timerID = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timerID);
      };
    }, []);
    
    // 次のバスまでの時間を計算
    const nextBusTime = busSchedule.find(busTime => {
      const [busHour, busMinute] = busTime.split(':').map(Number);
      const busDate = new Date();
      busDate.setHours(busHour, busMinute, 0, 0);
      return busDate > time;
    });
    let bustimeDifference = '本日のバスの運行は終了しました。';
    if (nextBusTime) {
      const [busHour, busMinute] = nextBusTime.split(':').map(Number);
      const nextBusDate = new Date();
      nextBusDate.setHours(busHour, busMinute, 0, 0);
      const diffSeconds = Math.round((nextBusDate - time) / 1000);
      const hours = Math.floor(diffSeconds / 3600);
      const minutes = Math.floor((diffSeconds % 3600) / 60);
      const seconds = diffSeconds % 60;
      bustimeDifference = `次のバスまで ${hours}時間${minutes}分${seconds}秒`;
    }

    // 次の電車までの時間を計算
    const nextTrainTime = trainSchedule.find(trainTime => {
      const [trainHour, trainMinute] = trainTime.split(':').map(Number);
      const trainDate = new Date();
      trainDate.setHours(trainHour, trainMinute, 0, 0);
      return trainDate > time;
    });
    let traintimeDifference = '本日の電車の運行は終了しました。';
    if (nextTrainTime) {
      const [trainHour, trainMinute] = nextTrainTime.split(':').map(Number);
      const nextTrainDate = new Date();
      nextTrainDate.setHours(trainHour, trainMinute, 0, 0);
      const diffSeconds = Math.round((nextTrainDate - time) / 1000);
      const hours = Math.floor(diffSeconds / 3600);
      const minutes = Math.floor((diffSeconds % 3600) / 60);
      const seconds = diffSeconds % 60;
      traintimeDifference = `次の電車まで ${hours}時間${minutes}分${seconds}秒`;
    }

    return (
      <div>
        <h2>{time.toLocaleDateString()}</h2>
        <h2>{time.toLocaleTimeString()}</h2>
        <h2>{bustimeDifference}</h2>
        <h2>{traintimeDifference}</h2>
      </div>
    );
  };

  return (
    <main>
      <div>
        <a href="https://aug.manaba.jp/ct/home">manaba</a>
        <a href="https://aitaasv.ashitech.ac.jp/aaa_web/cl0010.aspx">AAA</a>
        <Link href="/">ホーム</Link>
        <Link href="/search">シラバス検索</Link>
        <Link href="/about">AUinfoの使い方</Link>
        <Clock />
        <a href="https://www.ashitech.ac.jp/access/bus-index.html">バス時刻表</a>
      </div>
    </main>
  );
}
