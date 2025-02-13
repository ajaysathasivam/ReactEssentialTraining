import React from "react";

const HoverSearch = () => {
  const style = {
    width: "30px",
    height: "30px",
  };
  const conStyle = {
    backgroundColor:"rgba(34, 34, 34, 0.5)",
  }
//   const [isHover, setIsHover] = useState(false)
  return (
    <div className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-center"
        style={conStyle}
    >
      <div className="rounded-circle btn-primary d-flex align-items-center justify-content-center" style={style}>
        <i
          class="bi bi-search  fsw-bold text-light  "
        ></i>
      </div>
    </div>
  );
};

export default HoverSearch;
