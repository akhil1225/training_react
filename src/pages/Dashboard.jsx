import React from 'react'


const Dashboard = () => {

	const handleSubmit =(e) =>{
		e.preventDefault();
	}
	return (
		<div>Dashboard
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Username'></input> <br/>
				<input type='email' placeholder='Email'/><br/>
				<input type='password' placeholder='Password' /> <br/>
				<input type='radio' name='gender' value='Male' /><label htmlFor=''>Male</label>
				<input type='radio' name='gender' value='Female'/><label htmlFor=''>Female</label>
				<input type='radio' name='gender' value='others'/><label htmlFor=''>Others</label>
					<br/>
				<textarea name='' id='addres' cols="40" rows="5"></textarea>
					<br/>

				<select name='' id='country'>
					<option value="">-----Select Your Country-----</option>
					<option value="india">India</option>
					<option value="canada">Canada</option>
					<option value="venenzuela">Venenzuela</option>
					<option value="china">China</option>
					<option value="america">United States of America</option>
					<option value="mexico">Mexico</option>
				</select>
					<br/>
				 {/* File Upload Section */}
				<input type='file' id='fileUpload' style={{ display: 'none' }} />
        		<label htmlFor='fileUpload' 
							style={{padding: '5px 10px',
									border:"solid 2px black" ,
									background: '#a7a7a7',
									color: 'black',
									borderRadius: '5px',
									cursor: 'pointer',
									display: 'inline-block',
									marginTop: '10px',
									marginBottom: "10px"}}
							>Choose File
					</label>

        		<span id='fileChosen' style={{ marginLeft: '10px' }}>No file chosen</span>
					<br/>

				<button type='submit'>Submit here</button>

			</form>
		</div>
	)
}

export default Dashboard