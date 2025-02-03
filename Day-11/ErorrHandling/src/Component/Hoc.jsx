
import React from 'react';

// Higher-order component
const Hoc = (WrappedComponent) => {
    return function EnhancedComponent({ isLogin, ...props }) {
        if (isLogin) {
            return (<>
                <WrappedComponent />
                <div>Login successfully</div>
            </>);
        }else if(!isLogin){
            return (<div>worng !!!</div>);
        } 
        else {
            return (<div>Please Login You account !!!</div>);
        }
    };
};

export default Hoc;




// const Hoc = (warpComponent) => {
//     return function EnhancedComponent(prop) {
//         const {isLogin} = prop;
//         if (isLogin) {
//             return (<div>Login successfully</div>)
//         }
//         else {
//             return (<div>Login denied</div>)
//         }
//     }

// }

// export default Hoc