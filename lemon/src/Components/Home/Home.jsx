import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-[90%] w-full ">
      <section className="h-full md:h-[40%] w-full pt-8 flex flex-col items-center justify-center">
        <article className="w-full flex flex-col gap-10 items-center justify-center">
          <h1 className="font-semibold text-xl md:font-bold md:text-7xl text-gray-700">
            Home of Unique taste
          </h1>
          <p className="w-full px-3 md:w-1/3 text-center text-gray-400 font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            expedita aut dolorem commodi ducimus, vero nisi earum in molestiae
            quia.
          </p>
        </article>
        <Link
          to="/reservation/"
          className="my-4 uppercase bg-gray-800 hover:bg-green-600 text-white p-2 rounded-md"
        >
          Book a Table
        </Link>
      </section>
      <section className="hidden w-full h-[60%] md:flex flex-col gap-10 overflow-hidden">
        <div className="grid grid-cols-3 gap-8 px-[100px] h-[50%] overflow-hidden">
          <div className="flex flex-col justify-center items-center relative w-full overflow-hidden rounded-xl shadow-md bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover">
            <div className="bg-[#0909093c] rounded-md p-4 flex flex-col justify-center items-center">
              <h2 className="text-white  text-3xl shadow-sm">
                Cozy Environment
              </h2>
              <p className="text-white font-light shadow-2xl">
                Enjoy a serene environment
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-full overflow-hidden rounded-xl shadow-md bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover">
            <div className="bg-[#0909093c] rounded-md p-4 flex flex-col justify-center items-center">
              <h2 className="text-white  text-3xl shadow-sm">Buffet Option</h2>
              <p className="text-white font-light shadow-2xl">
                Eat what you can
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-full overflow-hidden rounded-xl shadow-md bg-[url('https://images.unsplash.com/photo-1616669944447-d65d41a222bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1454&q=80')] bg-center bg-cover">
            <div className="bg-[#0909093c] rounded-md p-4 flex flex-col justify-center items-center">
              <h2 className="text-white  text-3xl shadow-sm">
                Think it, Get it
              </h2>
              <p className="text-white font-light shadow-2xl">
                We cook by your direction
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 px-[400px] gap-4">
          <div className="h-[80%] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="cups"
            />
          </div>
          <div className="h-[80%] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="dj"
            />
          </div>
          <div className="h-[80%] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="cheers"
            />
          </div>
          <div className="h-[80%] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Dance"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
