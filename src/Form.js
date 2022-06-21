import React, { useState } from 'react';

function timestamp(){
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() +1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const hours = ('0' + today.getHours()).slice(-2);
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);
    const timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
    return timestamp
}

function Form({ submitHandler }){
    let [name, setName ] = useState()
    let [title, setTitle ] = useState()
    let [story, setStory ] = useState()

    const newDiscussion = () => {
        return {
            'id': timestamp(),
            'createdAt': timestamp(),
            'title': title,
            'url': '/',
            'author': name,
            'answer': null,
            'bodyHTML': '/',
            'avatarUrl': "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4"
        }
    }
    
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleChangeStory = (event) => {
        setStory(event.target.value)
    }

    const handleSubmit = () => {
        submitHandler(newDiscussion())
    }

    return (
        <form action="" method="get" className="form">
            <div className="form__input--wrapper">
                <div className="form__input--name">
                    <label htmlFor="name">Enter your name: </label>
                    <input className="input--name" 
                        value={name}
                        onChange={handleChangeName} 
                        type="text" 
                        name="name" 
                        id="name" required />
                </div>
                <div className="form__input--title">
                    <label htmlFor="name">Enter your title: </label>
                    <input className="input--title" 
                        value={title}
                        onChange={handleChangeTitle}
                        type="text" 
                        name="name" 
                        id="name" required />
                </div>
                <div className="form__textbox">
                    <label htmlFor="story">Your question: </label>
                    <textarea className="input--story" 
                    value={story} 
                    onChange={handleChangeStory}
                    id="story" 
                    name="story" 
                    placeholder="질문을 작성하세요" required></textarea>
                </div>
            </div>
            <div className="form__submit">
                <button className="form__submit-btn" type="button" onClick={handleSubmit}/>
            </div>
        </form>
    )
}

export default Form;