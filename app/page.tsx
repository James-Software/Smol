export default function Home() {
  return (
    <>
      <h1 className="font-fredoka font-bold text-9xl text-amber-600 pt-8">SMOL</h1>
      <div className="relative mt-24 w-2/5">
        {}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
        </div>

        {}
        <input 
          className="block w-full pl-12 h-12 border-2 border-white rounded-2xl outline-none focus:ring-0 p-2"
          placeholder="Paste a link"
        />
      </div>
    </>
  );
}
