import React from "react";

function HeroCardPage() {
  const quotes = [
    {
      text: "Successful people are not gifted; they just work hard, then succeed on purpose.",
      author: "G.K. Nielson",
    },
    // {
    //   text: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
    //   author: "Dwayne 'The Rock' Johnson",
    // },
  ];

  return (
    <div className="bg-[#AF8F6F] rounded-lg py-4 px-6 text-white max-w-xl">
      {quotes.map((quote, index) => (
        <div key={index} className=" relative">
          <p className=" font-light text-sm leading-relaxed">{quote.text}</p>
          <p className="text-sm italic  text-right mt-2">— {quote.author}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroCardPage;
