export default function Home() {
  return (
    <div>
      <div className="flex w-full bg-orange-500 h-80 ">
        <div className="w-1/2 bg-amber-950 h-full "></div>
        <div className="w-1/2 bg-amber-200 h-full "></div>
      </div>

      <div className="flex w-full bg-orange-500 h-80 ">
        <div className="w-1/3 bg-red-300 h-full "></div>
        <div className="w-1/3 bg-yellow-400 h-full "></div>
        <div className="w-1/3 bg-blue-700 h-full "></div>
      </div>
    </div>
  );
}
