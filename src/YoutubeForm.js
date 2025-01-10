import { useFormik } from "formik"

function YoutubeForm(){

const formik =useFormik({
    initialValues:{
        name: '',
        email: '',
        channel: ''
    },
    onSubmit:values=>{
    console.log(formik.values)
    }
})

console.log("form values are: ", formik.values)
return(
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">
               Name:  
            </label>
            <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name}></input>
            <label htmlFor="name">
               Email:
            </label>
            <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}></input>
            <label htmlFor="name">
               Channel:
            </label>
            <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default YoutubeForm