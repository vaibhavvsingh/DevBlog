import Card from "@/components/Card";
import Link from "next/link";
import data from '../data'


export default function Home({data}) {
  return (
    <div className="">
      <section className="bg-black text-white py-10 ">
        <div className="flex flex-wrap justify-center m-auto">
          <div className={`bg-[url('https://i0.wp.com/everyday.codes/wp-content/uploads/2020/02/a.jpg?w=1200&ssl=1')] bg-center w-[50%] h-[550px] bg-cover flex flex-col-reverse p-6`}>
            <Link href={'/1'}><p className="text-4xl font-serif text-shadow">{data[0].title}</p></Link>
          </div>
          <div className="w-[25%]">
            <div className={`bg-[url('https://s3-alpha.figma.com/hub/file/2603959525/8e909c88-4e83-4af4-b5b2-4a50a9b571f7-cover.png')] bg-center w-[100%] h-[275px] bg-cover flex flex-col-reverse p-6`}>
              <Link href={'/2'}><p className="text-2xl font-serif text-shadow">{data[1].title.substring(0,40)} ...</p></Link>
            </div>
            <div className={`bg-[url('https://digitalcloud.training/wp-content/uploads/2022/01/Amazon-RDS.jpg')] bg-center w-[100%] h-[275px] bg-cover flex flex-col-reverse p-6`}>
              <Link href={'/3'}><p className="text-2xl font-serif text-shadow">{data[2].title.substring(0,40)} ...</p></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f2f2f2]">
        <div className="flex flex-wrap justify-center items-stretch p-10 gap-10">
          {data.map((item)=>(
            <Link href={`/${item.id}`} key={item.id}><Card item={item} /></Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export function getStaticProps(){
  return {
    props: {
      data: data
    }
  }
}