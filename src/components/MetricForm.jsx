import React from 'react';


export class MetricForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
    }

    handleWeightChange(e) {
        const weight = e.target.value;
        this.props.weightChange(weight);
        
    }

    handleAgeChange(e){
        const age = e.target.value;
        this.props.ageChange(age);
    }

    handleHeightChange(e){
        const height = e.target.value;
        this.props.heightChange(height);
    }

    render(){
        return (
            <div className='grid grid-cols-2 gap-y-[20px] w-[50%] p-[30px] text-center items-center max-lg:gap-x-[20px]'>
                <label for="product_name" className='text-[1.2rem]  text-white ' >Weight</label>
                <input id="product_name"  type="text" maxlength="6" placeholder="(kg)" className='text-center rounded-[20px] p-[5px] w-[200px]' onChange={this.handleWeightChange}/>
            
                <label for="product_name" className='text-[1.2rem]  text-white'>Age</label>
                <input id="product_name" className="text-center rounded-[20px] p-[5px] w-[200px]" type="text" maxlength="3" placeholder="(years)"  onChange={this.handleAgeChange}/>

                <label for="product_name" className='text-[1.2rem]  text-white'>Height</label>
                <input id="product_name" className="text-center rounded-[20px] p-[5px] w-[200px]" type="text" maxlength="5" placeholder="(cm)" onChange={this.handleHeightChange}/>
            </div>
        );
    }
}