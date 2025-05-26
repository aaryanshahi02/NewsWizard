import React from 'react'


const NewsItem = (props) => {
  
    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className="my-3">

        <div className="card">
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/108147429-1747666316430-David_Adelman_Headshot.PNG?v=1747666414&w=1920&h=1080":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small class="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>

      </div>
    )
  
}

export default NewsItem
