import React from "react";

const Banner = () => {
  return (
    <div className="h-100 position-relative bg-warning">
      <img
        src="https://media.istockphoto.com/id/1418628408/vector/abstract-blurred-gradient-background-colours-with-dynamic-effect.jpg?s=612x612&w=0&k=20&c=v7ja1vfncSbHdNsgyjbtaiOPiexqUOLhRW_4L3PQ1ww="
        alt=""
        className="object-fit-contain z-1"
      />
      <div className="position-absolute top-0  p-4  ">
        <div className="row ">
          <div className="col-6 bg-primary">
            <h1>Wellcome</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus molestias numquam aperiam perspiciatis reiciendis
              corrupti commodi earum deserunt non, magnam, distinctio omnis? Ut,
              unde a facilis natus laborum facere earum.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
