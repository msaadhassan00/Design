import React from "react";

const DesignTwoComponent = () => {
  return (
    <div className="container-flex flex justify-between items-center flex-col mt-5">
      <div className="container h-full rounded-t-lg rounded-r-lg bg-gray-100 flex items-center p-5">
        {/* Image  */}
        <div className="w-64 flex items-center justify-center">
          <img
            src="https://thumbs.dreamstime.com/b/template-vector-quote-square-bracket-empty-frame-blank-template-vector-quote-square-bracket-empty-frame-square-business-card-140629415.jpg"
            className="w-48 "
            alt=""
          />
        </div>

        {/* Messages  */}
        <div className="w-7/12">messages</div>

        {/* Like / Dislike  */}
        <div className="border-l-4 w-64 flex justify-evenly items-center">
          <div>
            <img src="https://www.nicepng.com/png/detail/326-3260415_facebook-verified-right-tick-blue-png.png" alt=""
            className="w-24" />
            <p>Verified Post</p>
          </div>
          <div className='flex flex-col justify-between h-32'>
            <img
              src="https://p.kindpng.com/picc/s/0-6346_facebook-like-png-transparent-png.png"
              alt=""
              className="w-12"
            />
            <img
              src="https://www.kindpng.com/picc/m/209-2098801_dislike-png-transparent-thumbs-down-facebook-png-download.png"
              alt=""
              className="w-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignTwoComponent;
