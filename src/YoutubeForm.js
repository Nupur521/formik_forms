import { useFormik } from "formik"

function YoutubeForm(){

const validate = values =>{

    let errors={}

    if(!values.name)
        errors.name="Required"
    if(!values.email)
        errors.email="Required"
    if(!values.channel)
         errors.channel="Required"

    console.log(formik.errors)
    
    return errors
}

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit =values =>{
    console.log(formik.values)
}

const formik =useFormik({
    initialValues,
    onSubmit,
    validate
})

console.log("form values are: ", formik.touched)
return(
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div style={{marginBottom: '2px'}}>
            <label htmlFor="name">
               Name:  
            </label>
            <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
             {formik.touched.name ?<div>{formik.errors.name}</div>: null}
             </div>
             <div style={{marginBottom: '2px'}}>
            <label htmlFor="email">
               Email:
            </label>
            <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}></input>
            {formik.touched.email ? <div>{formik.errors.email}</div>: null}
            </div>
            <div style={{marginBottom: '2px'}}>
            <label htmlFor="channel">
               Channel:
            </label>
            <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}></input>
            {formik.touched.channel ? <div>{formik.errors.channel}</div>: null}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default YoutubeForm