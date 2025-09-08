

const index = () => {

  return(
    <div className=" h-screen bg-gradient-to-br from-blue-500 to-purple-700">
      <div className=" flex flex-col  justify-center items-center space-y-3">
      <h1 className="text-2xl font-bold md:text-5xl">Welcome to Job Harbor</h1>
      <p className="text-sm md:text-lg">Get latest job openings that best suits you!</p>
      <button className="bg-blue-500 text-white text-center py-3 px-4 rounded-full cursor-pointer hover:bg-blue-600 hover:scale-105 ">Start your search!</button>
      </div>

    </div>
  )
}

export default index
