export default function Video() {
  return (
    <div className='max-h-screen w-full relative'>
      <img
        src='./video.png'
        alt=''
        className='h-full w-full'
          />
          
          <div className="absolute inset-0 flex items-center  justify-center object-contain bg-black/60">
              <img src="./play.svg" alt="" className="cursor-pointer"/>
          </div>
    </div>
  );
}
