import React from 'react'
import './App.css';
import {departmentData, expoData, IndustryData, jobTitleData, ProductData, visitData } from './JobTitleData';
import {useForm} from "react-hook-form"

function App() {
  //register: registers the component into the hook and also hold validation rules of a specific tag
  //formState holds the errors 
  //for validation we add property spreaders to our input tags {...registers} and also validation rules 
  const {register, formState: {errors}, handleSubmit,} = useForm();
  const onSubmit = data => alert(JSON.stringify(data));
  const [formData, setFormData] = React.useState({
      title: '',
      country:'',
      jobTitle: '',
      department:'',
      industryInfo: '',
      visitPurpose:false,
      expoInfo: false,
      productInfo: false
  })

  function handleChange(event){ 
    
    const {name, value, type , checked} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData, 
        [name]: type === 'checkbox'? checked : value 
      }
    })
  }

  /* function handleSubmit(event){
    event.preventDefault()
  } */
 
  function clear(event){
    event.target.reset();
  }
  return (
    <div className="App">
      <div className='app__content'>
        <img src='zitf.png' alt='banner' className='app__image'/>
        <div className='contact__info--wrapper'>
          <h1>Mine Entra 2022 Registration</h1>
          <p>Event Timing:</p>
          <p>Event Address:</p>          
          <p>Event Contact Emails:</p>          
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='content__wrapper' style={{height: '210px'}}>
            <label htmlFor='title '>Title<span> *</span></label>
            <select
              {...register("level", {required: true})}
             className='select'
              id='title'
              
              name='title' 
              value={formData.title}
              
              onChange={handleChange}
            >
              <option value=''>Choose</option>
              <option value='dr'>Dr</option>
              <option value='Mrs'>Mrs</option>
              <option value='Mr'>Mr</option>
              <option value='Ms'>Ms</option>
              <option value='Prof'>Prof</option>
              <option value='none'>None of the above</option>
            </select>
            <div>
              <error>
                {formData.title? "" : errors.level?.type === "required" && "Please select a title"}
              </error>
            </div>
        </div>

       <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>First name<span> *</span></label>
          <input className='input__name' type='text' placeholder='Your Answer'
          {...register("first", {required: true})}
          />
          <error>
            {errors.first?.type === "required" && "Please enter your first name "}
          </error>
        </div>
        <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>Last name<span> *</span></label>
          <input className='input__name' type='text' placeholder='Your Answer'
          {...register("last", {required: true})}
          />
          <error>
            {errors.last?.type === "required" && "Please enter your last name "}
          </error>
        </div>

        <div className='content__wrapper' style={{height: '150px'}}>
            <label htmlFor='country'>Country of residence<span> *</span></label>
            <select className='select' style={{width:'25rem'}}
              {...register("country", {required: true})}
              id='country'
              name='country'
              value={formData.country}
              onChange={handleChange}
              
            >
              <option value=''>select country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, Democratic Republic of the Congo</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Cote D'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curacao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and Mcdonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libyan Arab Jamahiriya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="AN">Netherlands Antilles</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="CS">Serbia and Montenegro</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.s.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select> 
            <error>
              {errors.country?.type === "required" && "Please select the name of your country "}
            </error>
        </div>

        <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>City<span> *</span></label>
          <input className='input__name' type='text' placeholder='Your Answer'
            {...register("city",{required: true })}
          />
          <error>
            {/**inside the error tag we create closurethat will show a value if certain conditions are met inside the webpage*/}
            {errors.city?.type === 'required' && "City name is required"}
          </error>
          
        </div>

        <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>Telephone numeber<span> *</span></label>
          <input className='input__name' type='number' placeholder='Your Answer'
            {...register("telephone", {required: true})}
          />
          <error>
            {errors.telephone?.type === "required" && "Telephone number is required"}
          </error>
        </div>

        <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>Mobile Number<span> *</span></label>
          <input className='input__name' type='number' placeholder='Your Answer'
          {...register("mobile", {required: true})}
          />
          <error>
            {errors.mobile?.type ==="required" && "Mobile number is required"}
          </error>
        </div>

        <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>Email<span> *</span></label>
          <input className='input__name' type='email' placeholder='Your Answer'
          {...register("email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
          />
          <error>
            {errors.email?.type === "required" && "Email is required "}
            {errors.email?.type === "pattern "&& "Email is in wrong format "}
          </error>
        </div>

        <div className='content__wrapper' style={{height: '80px'}}>
          <label htmlFor='title '>Address<span> *</span></label>
          <input className='input__name' type='text' placeholder='Your Answer'
            {...register("address", {required: true})}
          />
          <error>
            {errors.address?.type === "required" && "Address is required"}
          </error>
        </div>

        <div className='content__wrapper'   >
          
          <fieldset style={{borderRadius: '10px'}} >
            <legend>What is your level of responsibility in your organization?<span> *</span></legend>
            {
              jobTitleData.map((data) => {
                return(
                  <div className='job__title' {...register("job", {required:true})} >
                    
                    <input 
                      type='radio'
                      id={data.id}
                      name={data.name}
                      value={data.asset}
                      checked={formData.jobTitle === data.asset}  
                      onChange={handleChange}  
                                  
                    />
                    
                    <label htmlFor={data.id}>{data.title}</label>
                    <br/>
                    <error>
                      {errors.job?.type === "required" && "Please specify your job title"}
                    </error>
                  </div>
                  
                )
              })
            }
          </fieldset>
          
        </div>

        <div className='content__wrapper' >
          <fieldset style={{borderRadius: '10px'}}>
            <legend>What is your function in your company?<span> *</span></legend>
            {
              departmentData.map((data) => {
                return(
                  <div className='job__title' >
                    <input 
                      type='radio'
                      id={data.id}
                      name={data.name}
                      value={data.asset}
                      checked={formData.department === data.asset}  
                      onChange={handleChange}                
                    />
                    <label htmlFor={data.id}>{data.title}</label>
                    <br/>
                  </div>
                  
                )
              })
            }
          </fieldset>
        </div>

        <div className='content__wrapper' >
          <legend>What is the purpose of your visit? (multiple response question)<span> *</span></legend>
            {
              visitData.map((data) => {
                return(
                  <div className='job__title' >
                    <input 
                      type='checkbox'
                      id={data.id}
                      name={data.name}
                      checked={formData.visitPurpose.id}  
                      onChange={handleChange}                
                    />
                    <label htmlFor={data.id}>{data.title}</label>
                    <br/>
                  </div>
                  
                )
              })
            }
         
        </div>

        <div className='content__wrapper' >
          <legend>How did you learn about this expo<span> *</span></legend>
            {
              expoData.map((data) => {
                return(
                  <div className='job__title' >
                    <input 
                      type='checkbox'
                      id={data.id}
                      name={data.name}
                      checked={formData.expoInfo.id}  
                      onChange={handleChange}                
                    />
                    <label htmlFor={data.id}>{data.title}</label>
                    <br/>
                  </div>
                  
                )
              })
            }
         
        </div>

        <div className='content__wrapper' >
          <fieldset style={{borderRadius: '10px'}}>
            <legend>To which industry does your company belong?<span> *</span></legend>
            {
              IndustryData.map((data) => {
                return(
                  <div className='job__title' >
                    <input 
                      type='radio'
                      id={data.id}
                      name={data.name}
                      value={data.asset}
                      checked={formData.industryInfo === data.asset}  
                      onChange={handleChange}                
                    />
                    <label htmlFor={data.id}>{data.title}</label>
                    <br/>
                  </div>
                  
                )
              })
            }
          </fieldset>
        </div>
        <div className='content__wrapper' >
          <legend>Which product group(s) are you interested in?<span> *</span></legend>
            {
              ProductData.map((data) => {
                return(
                  <div className='job__title' >
                    <input 
                      type='checkbox'
                      id={data.id}
                      name={data.name}
                      value={data.asset}
                      checked={formData.productInfo.id}  
                      onChange={handleChange}                
                    />
                    <label htmlFor={data.id}>{data.title}</label>
                    <br/>
                  </div>
                  
                )
              })
            }
         
        </div>
        <div className='form__buttons'>
          <button type='submit' value='Submit' >Submit</button>
          <button onClick={clear}>Clear form</button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
