import React from "react";

class Parent extends React.Component {
    render() {
        return (
            <div>
                <Child>
                    <h1>Заголовок 1</h1>
                    <p>Текст для дочернего компонента №1</p>
                </Child>
                <Child>
                    <h1>Заголовок 2</h1>
                    <p>Текст для дочернего компонента №2</p>
                </Child>
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.children[0]}</h1>
                <div>{this.props.children[1]}</div>
            </div>
        );
    }
}

export default Parent;





//
// class Parent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Child>
//                     {({ count, increment, decrement }) => (
//                         <div>
//                             <h1>Счетчик: {count}</h1>
//                             <button
//                                 onClick={increment}>
//                                 Увеличить
//                             </button>
//                             <button
//                                 onClick={decrement}>
//                                 Уменьшить
//                             </button>
//                         </div>
//                     )}
//                 </Child>
//             </div>
//         );
//     }
// }
//
// class Child extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//
//     increment = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     };
//
//     decrement = () => {
//         this.setState((prevState) => ({
//             count: prevState.count - 1
//         }));
//     };
//
//     render() {
//         return (
//             <div>
//                 {this.props.children(
//                     { count: this.state.count, increment: this.increment, decrement: this.decrement })
//                 }
//             </div>
//         );
//     }
// }
//
// export default Parent;
