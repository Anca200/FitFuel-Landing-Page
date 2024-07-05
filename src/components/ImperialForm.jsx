import React from 'react';


export class ImperialForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {feet: 0, inches:0}
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleFeetChange = this.handleFeetChange.bind(this);
        this.handleInchChange = this.handleInchChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
    }

    handleWeightChange(e) {
        // convert lbs value to kg before storing in parent state
        const weight = e.target.value;
        this.props.weightChange(weight*0.453592);
    }

    handleAgeChange(e){
        const age = e.target.value;
        this.props.ageChange(age);
    }

    handleFeetChange(e){
        let newFeet = e.target.value;
        if (newFeet.length === 0){
            newFeet = 0;
        }
        this.setState({feet: newFeet});
        this.handleHeightChange();
    }

    handleInchChange(e){
        let newInches = e.target.value;
        // TODO: error handling for inches > 11
        if(newInches.length === 0){
            newInches = 0;
        } 
        this.setState({inches: newInches});
        this.handleHeightChange();
        
    }

    handleHeightChange(){
        // feet/inches values converted to cm before setting state in parent component
        const FEET_TO_CM = 30.48;
        const IN_TO_CM = 2.54; 
        const totalHeight = (this.state.feet*FEET_TO_CM) + (this.state.inches*IN_TO_CM);
        this.props.heightChange(totalHeight); 
    }

    render(){
        return (
            <div className="grid grid-cols-2 gap-y-[20px] w-[50%] p-[30px] text-center items-center max-lg:gap-x-[20px] ">
                <label for="product_name " className='text-[1.2rem]  text-white'>Weight</label>
                <input id="product_name"  type="text" maxLength="6"  placeholder="(lbs)" onChange={this.handleWeightChange} className='text-center rounded-[20px] p-[5px] w-[200px]'/>
            
                <label for="product_name" className='text-[1.2rem]  text-white'>Age</label>
                <input id="product_name" type="text" maxLength="3" className='text-center rounded-[20px] p-[5px] w-[200px]' placeholder="(years)"onChange={this.handleAgeChange}/>
                
                <label for="product_name" className='text-[1.2rem]  text-white'>Height Feet</label>
                <input id="product_name" type="number" maxLength="5" className='text-center rounded-[20px] p-[5px] w-[200px]' name="feet" onChange={this.handleFeetChange}/>
                <label for="product_name" className='text-[1.2rem]  text-white'>Height Inches</label>
                <input id="product_name" type="number" maxLength="5" className='text-center rounded-[20px] p-[5px] w-[200px]' name="inches" onChange={this.handleInchChange}/>
                
            </div>
        );
    }
}
