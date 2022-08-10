import React from "react";

const MainComponent = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
        width: 950,
      }}
    />
  );

  return (
    <div className="mt-5">
      <div className="flex items-center justify-evenly">
        <h1 className="text-lg">Section 1: Introduction</h1>{" "}
        <ColoredLine color="orange" />
      </div>
      {/* Three */}
      <div className="flex items-center justify-around p-7 ">
        <div className="border-4 w-56 h-28 rounded-full flex flex-col justify-evenly items-center shadow-lg">
          <img
            src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
            className="w-12"
            alt=""
          />
          <p>Introduction</p>
        </div>
        <div className="border-4 w-80 h-28 rounded-full flex flex-col justify-evenly items-center shadow-lg">
          <img
            src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
            className="w-12"
            alt=""
          />
          <p>Find a good driver</p>
        </div>
        <div className="border-4 w-96 h-28 rounded-full flex flex-row justify-evenly items-center shadow-lg">
          <div className='flex flex-col items-center'>
            <img
              src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
              className="w-12"
              alt=""
            />
            <p>Assignment</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
              className="w-12"
              alt=""
            />
            <p>Notebook</p>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src="https://play-lh.googleusercontent.com/UEey690Z4mnzZfTwPHbgiHmTpWCJ8gBTeZMnzsEVg7vJzne7nRFRFOpBagQSas82rUzN=w240-h480-rw"
              className="w-12"
              alt=""
            />
            <p>Task</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
