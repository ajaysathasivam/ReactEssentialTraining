import "./test.scss"
const Test = () => {
  return (
    <div className="container">
        test-0
        <div className="container__Sub-One">
            test -1
            <div className="container__Sub-OneTwo">
                test-3
            </div>
        </div>
        <div className="container__SibOne">
            sib
        </div>
    </div>
  )
}

export default Test