
import React from 'react';
import {MetricForm} from '../components/MetricForm';
import {ImperialForm} from '../components/ImperialForm';
import {ActivityLevel} from '../components/ActivityLevel';
import {Result} from '../components/Results';


export class EntryForm extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = { age: '', gender: '', weight: '', activity: '', height: '', measurement: '',
                    measurementSelected: false, result: '', showResult: false, resultForm: ''};
        this.handleMeasurementChange = this.handleMeasurementChange.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeWeight = this.changeWeight.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
        this.getCalories = this.getCalories.bind(this);
        this.validEntry = this.validEntry.bind(this);
    }

    handleMeasurementChange(event){
        this.setState({
            measurement: event.target.value, measurementSelected: true
        });
    }

    changeGender(event){
        this.setState({
            gender: event.target.value
        });
    }

    changeWeight(newWeight){
        this.setState({
            weight: newWeight
        });
    }

    changeAge(newAge){
        this.setState({
            age: newAge
        })
    }

    changeHeight(newHeight){
        this.setState({
            height: newHeight
        })
    }

    changeActivity(newActivity) {
        this.setState({
            activity: newActivity
        });
    }

    validEntry(){
        // Check that all input fields are valid before getting result
        let fields = [this.state.gender,this.state.age,this.state.weight,this.state.height,this.state.activity];
        var i;

        // check that any of the fields arent empty 
        for (i in fields){
            if (fields[i].length === 0){
                return false;
            }
        }

        // check each field is in a valid range
        if (this.state.age < 0 || this.state.age > 120){
            return false;
        } 
        if (this.state.weight < 0){
            return false;
        } 
        if (this.state.height < 0){
            return false;
        }

        return true;
    }

    getCalories(event){
        if (this.validEntry()){
            this.setState({
                showResult: true,
                resultForm: <Result calories={this.calculateCalories()} measurementType={this.state.measurement}/>
            })
        } else {
            alert("Please make sure that you have entered valid information in every field.");
        }
        
    }

    // Calculate BMR from form data using Harris-Benedict Equation
    calculateCalories(){
        let bmr = 0;
        // use equation to get bmr (calroies burned at rest)
        if (this.state.gender === 'male'){
            bmr = 66.473 + (13.75116*this.state.weight) + (5.033*this.state.height)-(6.755*this.state.age);
        } else {
            bmr = 655.0955 + (9.5634*this.state.weight) + (1.8496*this.state.height)-(4.6756*this.state.age);
        }
        // adjust bmr according to activity level
        switch (this.state.activity){
            case 'none':
                bmr = bmr * 1.2;
                break;
            case 'light':
                bmr = bmr * 1.375;
                break;
            case 'moderate':
                bmr = bmr * 1.55;
                break;
            case 'heavy':
                bmr = bmr * 1.725;
                break;
            case 'v-heavy':
                bmr = bmr * 1.9;
                break;
        }
        return Math.round(bmr);
    }


    render() {
        return (
          <div id="calculator"> 
            <h2
                  data-aos="fade-up"
            className='text-center font-bold text-[3rem] mt-[100px] text-[#004d2eb3]'>Calculate Your Calories</h2>
            <div 
                  data-aos="fade-up"
            className="w-[500px] h-auto bg-[#004d2eb3] text-center items-center mt-[100px] overflow-hidden m-auto rounded-[20px] text-black max-lg:w-[95%]">
                <form>
                    <p className='font-semibold text-[1.5rem] mt-[20px] text-white'>Select unit of measurement:</p>
                    <div className="measurement-choice">
                        <input type="radio" id="metric" value="metric" checked={this.state.measurement === "metric"} onChange={this.handleMeasurementChange}/>
                        <label for="metric" className='text-[1.2rem] mr-[20px] text-white'>Kg</label>
                        <input type="radio" id="imperial"  value="imperial" checked={this.state.measurement === "imperial"}onChange={this.handleMeasurementChange}/>
                        <label for="female" className='text-[1.2rem] text-white'>Lbs</label>
                    </div>

                    <div className=' mt-[20px]'>
                        <select name='gender' id='gender' 
                        className="rounded-[20px] outline-none p-[10px] mb-[20px]" onChange={this.changeGender}>
                            <option value="#" disabled selected className='text-center bg-[#004d2eb3] text-white'>Select your gender</option>
                            <option value="male" className='text-center bg-[#004d2eb3] text-white '>Male</option>
                            <option value="female" className='text-center bg-[#004d2eb3] text-white'>Female</option>
                        </select>
                    </div>
                    
                    {this.state.measurement === 'metric' && <MetricForm weightChange={this.changeWeight} ageChange={this.changeAge} heightChange={this.changeHeight}/>}
                    {this.state.measurement === 'imperial' && <ImperialForm weightChange={this.changeWeight} ageChange={this.changeAge} heightChange={this.changeHeight}/>}
                    {this.state.measurementSelected && <ActivityLevel onChange={this.changeActivity}/>}
                    {this.state.measurementSelected &&  
                    <button type="button" className=' text-white text-[1.2rem] mb-[20px]' id="calculate-btn" onClick={this.getCalories}>Calculate my calories</button>}
                </form>
            </div>
            <div >
                {this.state.showResult && this.state.resultForm}
            </div>
           
          </div>
        );
    }
}

export default EntryForm 