import React from "react";

const Top = () => {
  return (
    <div className="container-flex flex justify-between items-center flex-col mt-5">
      <div className="container h-32 rounded-t-lg rounded-r-lg bg-gray-100 flex items-center p-5">
        {/* logo */}
        <div className="logo w-60 flex justify-between items-center flex-col">
          <img
            src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
            className="w-24"
            alt=""
          />
        </div>
        {/* Text */}
        <div>
          <h1 className="text-2xl font-bold">
            Level 2 Certificate Driving like Solomon.
          </h1>
          <p className="pr-64 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio est
            rem omnis alias voluptate ab nam reprehenderit fugiat recusandae
            quis sapiente unde dolorem cum deserunt libero, voluptatem
            consequuntur consequatur aliquam.
          </p>
        </div>

        {/* Post & Comment */}
        <div className=' w-80 flex flex-col justify-between items-center'> 
          <img
            src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
            className="w-14"
            alt=""
          />
          <p>Post & Comments</p>
        </div>
      </div>
    </div>
  );
};

export default Top;
