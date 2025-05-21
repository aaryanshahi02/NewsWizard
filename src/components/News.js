import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      page:1,
      loading:false
    }
  }

  async componentDidMount(){   
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=17c3b117d0244fd7bf298c760dae4d77&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false})
  }

  handlePrevClick = async ()=>{
    console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=17c3b117d0244fd7bf298c760dae4d77&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
  })}

  handleNextClick = async ()=>{
    console.log("next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){

    
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=17c3b117d0244fd7bf298c760dae4d77&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })
  
  }
}


  render() {
    return (
      
        <div className="container my-3 ">
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className = "col-md-4">
            <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

          })}     
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
