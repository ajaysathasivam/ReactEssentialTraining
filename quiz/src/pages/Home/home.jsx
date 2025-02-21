// import React, { useState } from "react";
// import { useFormik } from "formik";

// const Question = [
//   {
//     question1: "what one?",
//     option: ["option1", "option2", "option3", "option4"],
//     correctAns: "option1",
//   },
//   {
//     question1: "what two?",
//     option: ["option1", "option2", "option3", "option4"],
//     correctAns: "option2",
//   },
//   {
//     question1: "what three?",
//     option: ["option1", "option2", "option3", "option4"],
//     correctAns: "option3",
//   },
// ];

// const Home = () => {
//   const [nxt, setNext] = useState(null);
//   const [prv, setPrv] = useState(null);

//   const [currIdx, setCurrIdx] = useState(0);
//   const [correctCount,setCorrectCount]= useState(0);
//   const [answers,setAnswers]= useState([])

//   const handleAnswer =(idx,ans)=>{
//     setAnswers(pre=>([...pre,ans]))
//   }
//   const handleNext = () => {
//     if(currIdx===(Question.length-1)){
//       Question.map((obj,idx)=>{
//         console.log(answers,"answers")
//         if(obj.correctAns === answers[idx]){
//           setCorrectCount(pre=>pre+1)
//         }
//       })
//     }
//     else{
//       setCurrIdx((pre) => pre + 1);
//     }
//   };
//   const handleBack = () => {
//     setCurrIdx((pre) => pre >= 1 && pre - 1);
//     const sp = [...answers]
//     const sp2= sp.slice(currIdx)
//     setAnswers(sp2)
//     setCorrectCount(pre=>pre >= 1 && pre - (currIdx-1))
//   };
//   const formik = useFormik({
//     initialValues: {},

//     onSubmit: (values) => {
//       console.log(values, "values");

//       // alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div className="container  " style={{ height: "100vh" }}>
//       <div className=" mx-auto my-5 shadow-lg">
//         <div className="row">
//           <h1 className="text-center ">Question</h1>
//           <button
//             className="btn btn-success"
//             onClick={() => {
//               setNext(1), setPrv(0);
//             }}
//           >
//             start
//           </button>
//           {!!correctCount&&<h1>{correctCount}</h1>}
//           {Question.map(
//             (obj, idx) =>
//               currIdx === idx && (
//                 <div className={`col-12 `} key={idx}>
//                   <div className=" row border mx-2 p-2 d-flex">
//                     <div className="col-12 d-flex justify-content-between">
//                       <h3>{obj.question1}</h3>
//                       <span
//                         className="d-flex justify-content-center align-items-center rounded-circle bg-success"
//                         style={{ width: "25px", height: "25px" }}
//                       >
//                         <i className="bi bi-plus"></i>
//                       </span>
//                     </div>
//                     <p className="">
//                       <form onSubmit={formik.handleSubmit}>
//                         {obj.option.map((option) => (
//                           <>
//                             <input
//                               type="radio"
//                               id="css"
//                               name={nxt}
//                               onChange={(e) => {
//                               handleAnswer(idx,option)
//                               }}
//                               value={option}
//                             />
//                             <label htmlFor="css">{option}</label>
//                             <br />
//                           </>
//                         ))}
//                         <div className="d-flex ">
//                           <button
//                             className={`btn btn-primary m-1 ${
//                               prv === 0 ? " disabled" : "active"
//                             }`}
//                             onClick={() => {
//                               handleBack();
//                             }}
//                           >
//                             pre
//                           </button>
//                           <button
//                             className="btn btn-primary m-1 "
//                             onClick={() => {
//                               handleNext(idx);
//                             }}
//                           >
//                             {Question.length === nxt ? "submit" : "next"}next
//                           </button>
//                         </div>
//                       </form>
//                     </p>
//                   </div>
//                 </div>
//               )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState } from "react";
const Question = [
  {
    question1: "what one?",
    option: ["option1", "option2", "option3", "option4"],
    correctAns: "option1",
  },
  {
    question1: "what two?",
    option: ["option1", "option2", "option3", "option4"],
    correctAns: "option2",
     value:''
  },
  {
    question1: "what three?",
    option: ["option1", "option2", "option3", "option4"],
    correctAns: "option3",
  },
];

const Home = () => {
  // states 
  const [currIdx, setCurrIdx] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  // conditional
  const isQuestionEnd = Question?.length-1 === currIdx;
  const showScore = currIdx > Question?.length - 1;
  const inlineStyles = {
    container:{ height: "100vh" },
    titleBar :{ width: "25px", height: "25px" }
}



  // methods 
  const handleAnswer = (ans) => {
    const findIdx = answers?.findIndex((curr, index) => currIdx === index);
    const updateAns = [...answers];
    if (findIdx !== -1) {
      updateAns[findIdx] = ans;
      setAnswers(updateAns);
      return;
    }
    setAnswers((pre) => [...pre, ans]);
  };


  const handleNext = () => {
    if (Question?.length - 1 === currIdx) {
      let count = 0;
      Question?.forEach((curr, idx) => {
        curr.correctAns === answers[idx] && count++;
      });
      setCorrectCount(count);
    }
    setCurrIdx((pre) => pre + 1);
  };

  const handleBack = () => {
    setCurrIdx((pre) => pre >= 1 && pre - 1);
  };

  return (
    <div className="container  " style={inlineStyles.container}>
      <div className=" mx-auto my-5 shadow-lg py-5">
        <div className="row">
          <h1 className="text-center ">Question</h1>
          
          {showScore && <h1>{correctCount}</h1>}
          {Question.map(
            (obj, idx) =>
              currIdx === idx && (
                <div className={`col-12 `} key={idx}>
                  <div className=" row border mx-2 p-2 d-flex">
                    <div className="col-12 d-flex justify-content-between">
                      <h3>{obj.question1}</h3>
                      <span
                        className="d-flex justify-content-center align-items-center rounded-circle bg-success"
                        style={inlineStyles.titleBar}>
                        <i className="bi bi-plus"></i>
                      </span>
                    </div>
                    <p className="">
                      <>
                        {obj.option.map((option, idx) => (
                          <>
                            <input
                              type="radio"
                              id={idx}
                              name={"nxt"}
                              onChange={() => handleAnswer(option)}
                              value={option}
                              checked={answers[currIdx] === option}
                            />
                            <label 
                            htmlFor={idx}
                            onChange={() => handleAnswer(option)}>{option}</label>
                            <br />
                          </>
                        ))}
                        <div className="d-flex ">
                          <button
                            className={`btn btn-primary m-1 `}
                            onClick={() => {handleBack();}}>
                            pre
                          </button>
                          <button
                            className="btn btn-primary m-1 "
                            onClick={() => {handleNext();}}>
                            {isQuestionEnd ? "submit" : "next"}
                          </button>
                        </div>
                      </>
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
