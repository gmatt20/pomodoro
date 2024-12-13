

function App() {
  const focusMode = 25 * 60;
  const breakMode = 5 * 60;



  return (
    <>
      <main className="bg-black text-white h-screen w-screen flex justify-center items-center text-center">
        <div className="grid grid-cols-1 border-2 border-white p-4">
          <div className="m-4">
            <h1 className="text-3xl">25:00</h1>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <button className="bg-green-900 p-2">Focus</button>
            </div>
            <div>
              <button className="bg-blue-900 p-2">Break</button>
            </div>
            <div>
              <button className="bg-red-900 p-2">Restart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
