import React from "react";

export default function BookInfo({ object }) {
  const description =
    "A hilarious, offbeat debut space opera that skewers everything from pop culture to video games and features an irresistible foul-mouthed captain and her motley crew, strange life forms, exciting twists, and a galaxy full of fun and adventure.Culture to video games and features an irresistible foul-mouthed captain and her motley crew, strange life forms, exciting twists, and a galaxy full of fun and adventure. Innocente and the crew of La Sirena Negra cruise the galaxy delivering small cargo for even smaller profits. When  an amorous fish-faced emperor.";

  const InfoLine = function ({ title, content }) {
    return (
      <div className="flex mb-1">
        <p className="text-sm font-semibold mr-1.5">{title}</p>
        <span className="text-sm">{content}</span>
      </div>
    );
  };

  const genres = object.genres.map((element) => element.genreTitle);

  return (
    <div className="flex font-fontbasic text-primary flex-col w-full px-4 relative">
      <div className="flex flex-col mt-4 w-96">
        <InfoLine title="Title:" content={`“${object.booksTitle}”`} />
        <InfoLine title="Author:" content={object.author} />
        <InfoLine title="Year:" content={object.year} />
        <InfoLine title="Genres:" content={genres.join(", ")} />
      </div>
      <div className="text-sm">
        <InfoLine title="Description:" content={null} />
        <p className="w-3/5 mb-2">
          {object.description.split(" ").slice(0, 25).join(" ")}
        </p>
        <p className="w-3/5 mb-3">
          {object.description.split(" ").slice(25, 50).join(" ")}
        </p>
        <p className="w-full">
          {object.description.split(" ").slice(50).join(" ")}
        </p>
      </div>
      <img
        src={object.coverPhoto}
        className="absolute w-50 right-10 top-4 h-72 object-cover"
      />
    </div>
  );
}