function Discussion({ discussion }){

    return (
        <ul className="discussions__container">
            {discussion.map((dis)=>{
                return (
                    <li className="discussion__container" key={dis.id}>
                        <div className="discussion__avatar--wrapper">
                            <img className="discussion__avatar--image"
                            src={dis.avatarUrl}
                            alt={"avatar of " + dis.author} />
                        </div>
                        <div className="discussion__content">
                            <h2 className="discussion__title"><a href={dis.url}>{dis.title}</a></h2>
                            <div className="discussion__information">{dis.author} / {dis.createdAt}</div>
                        </div>
                        <div className="discussion__answered">
                            <p>{dis.answer === null ? '□' : '☑'}</p>
                        </div>
                    </li>
                )
            })}        
        </ul>
    )
}

export default Discussion