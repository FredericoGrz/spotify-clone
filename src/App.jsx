import { FiHome, FiSearch, FiPlus } from "react-icons/fi"
import { LuLibrary } from "react-icons/lu"
import { BsFillHeartFill, BsFillSkipStartFill, BsSkipEndFill, BsPlayFill, BsRepeat, BsVolumeUp, BsArrowsAngleExpand, BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { BiShuffle, BiSolidDownArrow } from "react-icons/bi"
import { TbBroadcast, TbMicrophone2 } from "react-icons/tb"
import { RiPlayList2Fill } from "react-icons/ri"
import { HiOutlineDesktopComputer } from "react-icons/hi"


function App() {
  return (
    <div className='h-screen w-full flex flex-col'>
      <div className="flex-1 flex">
        <aside className="w-72 bg-gray-950 py-8 flex flex-col gap-8 text-white">
          <div className="pl-7">
            <img src="Spotify-logo.png" alt="Spotify Logo" />
          </div>
          <div className="px-3 flex flex-col gap-1">
            <div className="flex items-center gap-3 hover:bg-gray-200/25 rounded px-6 py-3 cursor-pointer font-semibold">
              <FiHome className="text-xl" />
              Home
            </div>
            <div className="flex items-center gap-3 hover:bg-gray-200/25 rounded px-6 py-3 cursor-pointer font-semibold">
              <FiSearch className="text-xl" />
              Search
            </div>
            <div className="flex items-center gap-3 hover:bg-gray-200/25 rounded px-6 py-3 cursor-pointer font-semibold">
              <LuLibrary className="text-xl" />
              Your Library
            </div>
          </div>
          <div className="px-3 flex flex-col gap-1">
            <div className="flex items-center gap-3 hover:bg-gray-200/25 rounded px-6 py-3 cursor-pointer font-semibold">
              <div className="bg-gray-50 p-1 rounded">
                <FiPlus className="text-black" />
              </div>
              Create Playlist
            </div>
            <div className="flex items-center gap-3 hover:bg-gray-200/25 rounded px-6 py-3 cursor-pointer font-semibold">
              <div className="bg-gradient-to-br from-indigo-700 via-indigo-400 to-indigo-200 p-1 rounded w-6 h-6 flex items-center justify-center">
                <BsFillHeartFill className="text-white text-xs ml-0.5" />
              </div>
              Liked Songs
            </div>
            <div className="flex items-center gap-3 hover:bg-gray-200/25 rounded px-6 py-3 cursor-pointer font-semibold">
              <div className="bg-green-800 p-1 rounded w-6 h-6 flex items-center justify-center">
                <TbBroadcast className="text-green-400 text-sm ml-0.5" />
              </div>
              Your Episodes
            </div>
          </div>
          <div className="px-3 flex flex-col gap-3">
            <div className="hover:font-bold rounded px-6 cursor-pointer font-semibold">
              FAV
            </div>
            <div className="hover:font-bold rounded px-6 cursor-pointer font-semibold">
              Daily Mix 1
            </div>
            <div className="hover:font-bold rounded px-6 cursor-pointer font-semibold">
              Discover Weekly
            </div>
            <div className="hover:font-bold rounded px-6 cursor-pointer font-semibold">
              Malayalam
            </div>
            <div className="hover:font-bold rounded px-6 cursor-pointer font-semibold">
              Dance/Electronix Mix
            </div>
            <div className="hover:font-bold rounded px-6 cursor-pointer font-semibold">
              EDM/Popular
            </div>
          </div>
        </aside>
        <main className="w-full bg-gradient-to-b from-black/80 via-black/90 to-black/95 pt-5 px-10 flex flex-col gap-10">
          <header className="flex w-full justify-between items-center">
            <div className="flex gap-5">
              <button className="w-10 h-10 bg-black/40 flex justify-center items-center rounded-full text-gray-200">
                <BsArrowLeft className="text-2xl" />
              </button>
              <button className="w-10 h-10 bg-black/40 flex justify-center items-center rounded-full text-gray-500 cursor-not-allowed">
                <BsArrowRight className="text-2xl" />
              </button>
            </div>
            <div className="relative text-white ">
              <div className="bg-gray-950 h-10 rounded-full flex pl-14 gap-3 items-center pr-2">
                <div className="font-bold">
                  Angel
                </div>
                <button>
                  <BiSolidDownArrow />
                </button>
              </div>
              <div className="absolute h-10 w-10 top-0">
                <img className="h-full w-full rounded-full" src="woman.png" alt="Avatar do usuário" />
              </div>
            </div>
          </header>
          <section id="morning" className="flex flex-col gap-2">
            <h1 className="text-gray-50 font-bold text-3xl">Good morning</h1>
            <div id="playlist_cards" className="grid grid-cols-4 gap-7 grid-rows-2">
              <button className="flex col-span-1 hover:scale-105 transition">
                <div className="h-24 w-1/3 bg-gradient-to-br from-indigo-700 via-indigo-400 to-indigo-200 p-1 flex items-center justify-center rounded-tl rounded-bl">
                  <BsFillHeartFill className="text-white text-4xl ml-0.5" />
                </div>
                <div className="w-full h-full flex items-center text-gray-50 bg-black/20 pl-5 rounded-tr rounded-br">
                  <div className="font-semibold">Liked Songs</div>
                </div>
              </button>
              <button className="flex col-span-1 hover:scale-105 transition">
                <div className="h-24 w-1/3 rounded-tl rounded-bl">
                  <img src="neffex.png" alt="Neffex Band Cover" className="h-full w-full" />
                </div>
                <div className="w-full h-full flex items-center text-gray-50 bg-black/20 pl-5 rounded-tr rounded-br">
                  <div className="font-semibold">Neffex Playlist</div>
                </div>
              </button>
              <button className="flex col-span-1 hover:scale-105 transition">
                <div className="h-24 w-1/3 rounded-tl rounded-bl">
                  <img src="kda.png" alt="K/DA Band Cover" className="h-full w-full" />
                </div>
                <div className="w-full h-full flex items-center text-gray-50 bg-black/20 pl-5 rounded-tr rounded-br">
                  <div className="font-semibold">K/ DA</div>
                </div>
              </button>
              <button className="flex col-span-1 hover:scale-105 transition">
                <div className="h-24 w-1/3 rounded-tl rounded-bl">
                  <img src="dance.png" alt="dance playlist Band Cover" className="h-full w-full" />
                </div>
                <div className="w-full h-full flex items-center text-gray-50 bg-black/20 pl-5 rounded-tr rounded-br">
                  <div className="font-semibold">Dance / Eletronic Mix</div>
                </div>
              </button>
              <button className="flex col-span-1 hover:scale-105 transition">
                <div className="h-24 w-1/3 rounded-tl rounded-bl">
                  <img src="interestelar.jpg" alt="dance playlist Band Cover" className="h-full w-full" />
                </div>
                <div className="w-full h-full flex items-center text-gray-50 bg-black/20 pl-5 rounded-tr rounded-br">
                  <div className="font-semibold">Interestelar Film Soundtrack</div>
                </div>
              </button>
              <button className="flex col-span-1 hover:scale-105 transition">
                <div className="h-24 w-1/3 rounded-tl rounded-bl">
                  <img src="vintage.jpg" alt="dance playlist Band Cover" className="h-full w-full" />
                </div>
                <div className="w-full h-full flex items-center text-gray-50 bg-black/20 pl-5 rounded-tr rounded-br">
                  <div className="font-semibold">Vintage Culture</div>
                </div>
              </button>


            </div>
          </section>
          <section id="shows" className="flex flex-col gap-2">
            <h2 className="text-gray-50 font-bold text-2xl">Shows you might like</h2>
            <div id="podcast_cards" className="grid grid-cols-6 gap-7 grid-rows-1 p-1">
              <button className="col-span-1 p-4 bg-black/50 grid-rows-1 flex flex-col gap-1 hover:scale-105 transition">
                <div>
                  <img src="weekly-motivation.png" alt="Weekly Motivation Cover" />
                </div>
                <div className="text-start">
                  <p className="text-white font-bold text-lg">Weekly Motivation</p>
                  <p className="text-gray-300">Ben Ina Scott</p>
                </div>
              </button>
              <button className="col-span-1 p-4 bg-black/50 grid-rows-1 flex flex-col gap-1 hover:scale-105 transition">
                <div>
                  <img src="self-meditation.png" alt="Self Meditation Cover" />
                </div>
                <div className="text-start">
                  <p className="text-white font-bold text-lg">MEDITATION SELF</p>
                  <p className="text-gray-300">Ibn Hussain Aleen</p>
                </div>
              </button>
              <button className="col-span-1 p-4 bg-black/50 grid-rows-1 flex flex-col gap-1 hover:scale-105 transition">
                <div>
                  <img src="worlds-beyond.png" alt="Words Beyond Cover" />
                </div>
                <div className="text-start">
                  <p className="text-white font-bold text-lg">Words Beyond Act...</p>
                  <p className="text-gray-300">Samuel Scott</p>
                </div>
              </button>
              <button className="col-span-1 p-4 bg-black/50 grid-rows-1 flex flex-col gap-1 hover:scale-105 transition">
                <div>
                  <img src="alexa-show.png" alt="Alexa Show Cover" />
                </div>
                <div className="text-start">
                  <p className="text-white font-bold text-lg">The Alexa Show</p>
                  <p className="text-gray-300">Adriana Tom</p>
                </div>
              </button>
              <button className="col-span-1 p-4 bg-black/50 grid-rows-1 flex flex-col gap-1 hover:scale-105 transition">
                <div>
                  <img src="stories.png" alt="Stories Cover" />
                </div>
                <div className="text-start">
                  <p className="text-white font-bold text-lg">The Stories of Ma...</p>
                  <p className="text-gray-300">Lexus</p>
                </div>
              </button>
              <button className="col-span-1 p-4 bg-black/50 grid-rows-1 flex flex-col gap-1 hover:scale-105 transition">
                <div>
                  <img src="motivation-daily.png" alt="Motivation Daily Cover" />
                </div>
                <div className="text-start">
                  <p className="text-white font-bold text-lg">Motivation Daily b...</p>
                  <p className="text-gray-300">Georgina Martha</p>
                </div>
              </button>
            </div>

          </section>
        </main>
      </div>
      <footer className="h-28 bg-black/90 flex justify-between p-4">
        <div id="songInfo" className="flex h-full items-center gap-4">
          <div id="img" className="w-16 h-16">
            <img src="dreaming-on.jpg" alt="Song image" />
          </div>
          <div id="song" className="flex flex-col">
            <p className="text-white font-semibold">Dreaming On</p>
            <p className="text-sm text-gray-300">NEFFEX</p>
          </div>
          <div id="heart">
            <BsFillHeartFill className="text-lg fill-green-600" />
          </div>
        </div>
        <div id="actions" className="flex flex-col w-1/3 gap-2">
          <div id="buttons" className="flex text-xl gap-2 text-gray-300 justify-center">
            <button className="mr-4 hover:text-gray-50 transition">
              <BiShuffle />
            </button>
            <button className="hover:text-gray-50 transition">
              <BsFillSkipStartFill />
            </button>
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <BsPlayFill className="text-black text-4xl ml-1" />
            </button>
            <button className="hover:text-gray-50 transition">
              <BsSkipEndFill />
            </button>
            <button>
              <BsRepeat className="ml-4 hover:text-gray-50 transition" />
            </button>
          </div>
          <div id="progressBar" className="flex w-full gap-2 items-center text-gray-300">
            <div>
              2:11
            </div>
            <div className="relative w-full cursor-pointer">
              <div className="absolute w-full h-1 bg-gray-500 rounded"></div>
              <div className="absolute top-0 left-0 w-4/5 h-1 bg-gray-100 rounded"></div>
            </div>
            <div>2:42</div>
          </div>
        </div>
        <div id="volume">
          <div className="flex gap-3 h-full items-center text-gray-300">
            <button className="hover:text-gray-50 transition">
              <TbMicrophone2 className="text-lg" />
            </button>
            <button className="hover:text-gray-50 transition">
              <RiPlayList2Fill className="text-lg" />
            </button>
            <button className="hover:text-gray-50 transition">
              <HiOutlineDesktopComputer className="text-lg" />
            </button>
            <button className="hover:text-gray-50 transition">
              <BsVolumeUp className="text-lg" />
            </button>
            <div className="w-28 border-2 rounded border-gray-400 -ml-2 cursor-pointer"></div>
            <button className="hover:text-gray-50 transition">
              <BsArrowsAngleExpand className="text-lg" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
