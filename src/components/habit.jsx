import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    // lifecycle method
    // 컴포넌트가 UI 상에 등록 되었을 때, 사용자에게 보여질 때
   //   소켓 초기화 하거나, 
    componentDidMount(){
        console.log(`habit: ${this.props.habit.name} mounted`)
    }
     // lifecycle method
    // 지우기 전
    // 소켓 정리 리소스 지우는 기능
    componentWillUnmount(){
        console.log(`habit: ${this.props.habit.name} will unmounted`)
    }


    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }


    render() {
        const {name, count} = this.props.habit
        return (
            <li className='habit'>
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}
                >
                <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
                </button>
                

            </li>
        );
    }
}

export default Habit;