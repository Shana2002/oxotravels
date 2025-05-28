import React from 'react';

const ExperianceCard = ({ userImage, userName, message, onHover }) => {
  return (
    <div
      className="w-full h-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-teal-400/10 transition-all duration-300 flex flex-col px-4 py-5 cursor-default"
      onMouseEnter={onHover}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={userImage}
          alt={userName}
          className="w-11 h-11 rounded-full border-2 border-white/40 object-cover"
        />
        <h2 className="text-white font-semibold text-lg">{userName}</h2>
      </div>

      {/* Message */}
      <div className="text-gray-200 text-sm leading-snug flex flex-col gap-2">
        <span className="text-3xl text-green-400 -mt-2">“</span>
        <p className="text-justify px-1">{message}</p>
        <span className="self-end text-3xl text-green-400 -mb-2">”</span>
      </div>
    </div>
  );
};

export default ExperianceCard;
