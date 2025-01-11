import { useFormik } from "formik"
import * as Yup from 'yup'

function YoutubeForm(){

const validationSchema= Yup.object({
       name: Yup.string().required('Required'),
       email: Yup.string().email('Invalid Email Format').required('Required'),
       channel: Yup.string().required('Required')
    }
)
// const validate = values =>{

//     let errors={}

//     if(!values.name)
//         errors.name="Required"
//     if(!values.email)
//         errors.email="Required"
//     if(!values.channel)
//          errors.channel="Required"

//     console.log(formik.errors)
    
//     return errors
// }

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
    validationSchema
})

console.log("form values are: ", formik.touched)
return(
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div style={{marginBottom: '2px'}}>
            <label htmlFor="name">
               Name:  
            </label>
            <input type="text" name="name" id="name" 
         {...formik.getFieldProps('name')}></input>
             {formik.touched.name ?<div>{formik.errors.name}</div>: null}
             </div>
             <div style={{marginBottom: '2px'}}>
            <label htmlFor="email">
               Email:
            </label>
            <input type="email" name="email" id="email" 
          {...formik.getFieldProps('email')}></input>
            {formik.touched.email ? <div>{formik.errors.email}</div>: null}
            </div>
            <div style={{marginBottom: '2px'}}>
            <label htmlFor="channel">
               Channel:
            </label>
            <input type="text" name="channel" id="channel" 
            {...formik.getFieldProps('channel')}></input>
            {formik.touched.channel ? <div>{formik.errors.channel}</div>: null}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default YoutubeForm