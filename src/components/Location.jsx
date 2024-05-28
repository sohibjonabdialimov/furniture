import React from 'react'
import { Location1, Location2, Location3 } from '../assets/location'

const Location = () => {
  return (
    <div className='sm:p-24 p-8 pb-10'>
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Bizning manzilimiz
      </h1>
      <p className="sm:w-3/4 w-[100%] text-lg leading-8 text-justify sm:text-start">Biz bugungi kundagi eng dolzarb assortimentlarni taklif etamiz va mijozlarga sotib olishga ishonch hosil qilish uchun barcha imkoniyatlarni taqdim etamiz. Biz sizni manzilimizga tashrif buyurishga va shaxsan mebellarimiz uchun ishlatiladigan mato va materiallarning sifatini baholashingizga, ishlash mexanizmlarni va qulayliklarni tekshirishga, mebelimizning sifatliligiga ishonch hosil qilishga taklif qilamiz!</p>
      <div className="map_wrap my-5 sm:my-0">
        <div className="map_item">
          <Location1 />
          <p>Oʻzbekiston, Toshkent shah, Amir Temur koʻch, Yunusobod</p>
        </div>
        <div className="map_item">
          <Location2 />
          <p>Universam bozoridan 3 daqiqa</p>
        </div>
        <div className="map_item">
          <Location3 />
          <p>Aeroportdan 8 daqiqa</p>
        </div>
      </div>
      <iframe
          src="https://yandex.uz/map-widget/v1/org/131222940559/?ll=69.180014%2C41.276609&z=15"
          width="100%"
          height={400}
          frameBorder={1}
          allowFullScreen="true"
          style={{ position: "relative" }}
        />
    </div>
  )
}

export default Location