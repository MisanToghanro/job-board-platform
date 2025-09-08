

const Home = () => {

  return(
    <div className=" min-h-screen mx-auto bg-gradient-to-br from-blue-500 to-purple-700">
      <div className="h-screen flex flex-col  justify-center items-center space-y-5 text-center px-4">
      <h1 className="text-3xl font-extrabold md:text-5xl drop-shadow-2xl">Welcome to Job Harbor</h1>
      <p className="text-sm md:text-lg max-w-md">Get latest job openings that best suits you!</p>
      <button className="bg-blue-500 text-white text-center py-3 px-4 rounded-full cursor-pointer hover:bg-blue-600 hover:scale-105 transition shadow-md">Start your search!</button>
      </div>

    </div>
  )
}

export default Home;
