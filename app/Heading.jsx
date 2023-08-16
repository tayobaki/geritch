
export default function Heading({ title }) {
  return (
      <div className="mb-3 flex flex-col gap-2">
          <p className="text-3xl text-[#dcc487]">{title}</p>
          <img src="./vector.svg" alt="" className="w-[90px] "/>
    </div>
  )
}
