import React from "react";

const Biography = () => {
  return (
    <div>
      <h3 className="font-playfairDisplaySC lg:text-5xl text-3xl uppercase pb-2">
        Biography
      </h3>
      <div className="leading-relaxed flex flex-col font-roboto font-light gap-2">
        <p>
          Dorothea Lange (1895-1965) was an influential American documentary
          photographer known for her compassionate depictions of social issues.
          Born in Hoboken, New Jersey, Lange&lsquo;s early work as a portrait
          photographer in San Francisco laid the foundation for her empathetic
          approach to capturing the human condition.
        </p>
        <p>
          Lange&lsquo;s photographs of migrant workers during the Great Depression,
          such as her iconic &lsquo;Migrant Mother,&lsquo; not only captured the stark
          realities of poverty but also sparked national awareness and
          government action. Her ability to humanize social issues through
          photography remains a testament to the enduring power of visual
          storytelling.
        </p>
      </div>
    </div>
  );
};

export default Biography;
