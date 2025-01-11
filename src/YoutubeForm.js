import {useFormik } from "formik"
import {Formik,Form,Field,ErrorMessage} from 'formik'
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
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <div style={{marginBottom: '2px'}}>
            <label htmlFor="name">
               Name:  
            </label>
            <Field type="text" name="name" id="name"/>
             <ErrorMessage name='name' component="div"/>
             </div>
             <div style={{marginBottom: '2px'}}>
            <label htmlFor="email">
               Email:
            </label>
            <Field type="email" name="email" id="email"/>
            <ErrorMessage name='email' component="div"/>
            </div>
            <div style={{marginBottom: '2px'}}>
            <label htmlFor="channel">
               Channel:
            </label>
            <Field type="text" name="channel" id="channel"/>
            <ErrorMessage name='channel' component="div"/>
            </div>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
)
}

export default YoutubeForm