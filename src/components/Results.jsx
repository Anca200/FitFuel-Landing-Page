import React from 'react';

export class Result extends React.Component{
    constructor(props) {
        super(props);
        this.state = {weightType: '', weightValue: ''}
    }

    static getDerivedStateFromProps(props, state) {
        if (props.measurementType === "metric"){
            return {weightType: 'kg', weightValue: 0.5}
        } else {
            return {weightType: 'lbs', weightValue: 1}
        }
        
    }

    render(){
        return(
            <div className="text-center items-center w-[500px] m-auto rounded-[20px] mt-[20px] bg-[#004d2eb3] text-white p-[20px] max-lg:w-[90%]">
                <form>
                    <div >
                        <h2 className='text-[1.2rem] font-bold'>{this.props.calories} calories</h2>
                        <p> To maintain your current weight</p>
                    </div>

                    <table className=" text-center items-center m-auto">
                        <tr>
                           
                            <th>Gain Weight</th>
                            <th>Lose Weight</th>
                        </tr>
                        <tr>
                            <td>{this.state.weightValue} {this.state.weightType} per week</td>
                            <td>{this.props.calories + 500}</td>
                            <td>{this.props.calories - 500}</td>
                        </tr>
                        <tr>
                            <td>{this.state.weightValue * 2} {this.state.weightType} per week</td>
                            <td>{this.props.calories + 1000}</td>
                            <td>{this.props.calories - 1000}</td>
                        </tr>
                    </table>
                    
                </form>

                
            </div>
        );
    }
}