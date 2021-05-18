import React,{useState} from 'react'

export default function Post() {

    const [title, setTitle] = useState()
    const [body, setBody] = useState()
    const [image,setImage] = useState("")

    return (
        <div className="card input-field">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                <button className="btn waves-effect waves-light #546e7a blue-grey darken-1">Create Post</button>
            </div>
        </div>
    )
}
