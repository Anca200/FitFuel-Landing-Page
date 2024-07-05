import React from 'react';

export class ActivityLevel extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const activity = e.target.value;
        this.props.onChange(activity);
    }

    render(){
        return (
            <div >
                <label for="activity"
                 className='text-[1.2rem] mr-[20px] text-white '>Activity Level</label>
                <select name="activity" id="activity" className='text-black text-center outline-none rounded-[20px] p-[5px] mb-[20px] w-[300px] max-lg:mt-[20px]' onChange={this.handleChange}>
                    <optgroup className='bg-[#004d2eb3] text-center text-white ' >
                        <option value=""  disabled selected>Select your activity level</option>
                        <option value="none" className='font-semibold text-[1.1rem] p-[10px] '>No exercise (or very litte)</option>
                        <option value="light"className='font-semibold text-[1.1rem] p-[10px]'>Light exercise (1-3 days per week)</option>
                        <option value="moderate" className='font-semibold text-[1.1rem] p-[10px]'>Moderate Exericse (3-5 days a week)</option>
                        <option value="heavy" className='font-semibold text-[1.1rem] p-[10px]'>Heavy Exercise (6-7 days a week)</option>
                        <option value="v-heavy" className='font-semibold text-[1.1rem] p-[10px]'>Very Heavy Exercise (twice a day/active job)</option>
                    </optgroup>  
                </select>
            </div>
        );
    }
}
