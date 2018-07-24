import React from 'react';
import axios from 'axios';

// Class Search
class Search extends React.Component {
    state = {
        result: [],
        movie: '',
        saved: {
            title: '',
            date: '',
            url: ''
        }
    }

// Api Key
    searchOMDB = query => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1a7e7fa8=${this.state.Movie}`).then(res => {
            this.setState({
                result: res.data.response.docs
            }, () => {
                console.log(this.state.result)
            })
        });
    }

//Save Article
    saveArticle = id => {
        let filterArray = this.state.result.filter(article => {
            return article._id === id;
        });

        let filtered = filterArray[0];
        this.setState({
            saved: {
                movie: filtered.headline.main,
                date: filtered.pub_date,
                url: filtered.web_url
            }
        }, () => {
            axios.post('/api/articles', this.state.saved)
                .then(response => {
                    console.log('sent' + response);
                }).catch(err => {
                    console.log(err);
                })
        })
    }

//SummitForm
    SummitForm = event => {
        event.preventDefault();
        this.searchOMDB(this.state.search);
    }

// Title & Sub-Title
    render() {
        return (
            <div>
                <center><h1>Search OMDB</h1></center>
                <center>
                    <div className='form-group-row' >
                        <h4><label className="col-2"> Movie </label></h4>
                        <div className="col-10" >
                            <input className="form-control" type="text" value={this.state.Movie} change={this.searchInputchange} />
                        </div>
                    </div>
                </center>

{/* Date  */}
                <center>
                    <div className="form-group-row" >
                        <h4><label className="col-2"> Date </label></h4>
                        <br />
                        <div className="col-10" >
                            <input className="form-control" type="date" value={this.state.Date} change={this.searchInputchange} id="date-input" />
                        </div>
                    </div>
                </center>

{/* Summit */}
                <center>
                    <button type="submit" className="btn btn-primary" onClick={this.Summit}> Submit </button>
                </center>

{/* Result & Saved */}
                <div>
                    <center>
                        <h1>OMDB Result</h1>
                        <h1>OMDB Saved</h1>
                    </center>
                    {this.state.result.map((article, i) => {
                        return (
                            <div>
                                <p>
                                    <a key={i}
                                        id={article._id}
                                        href={article.web_url}>{article.headline.main}
                                    </a>
                                </p>

{/* Publish */}
                                <p> Publish:{article.pub_date} </p>
                                <button onClick={() => this.saveArticle(article._id)} type='submit'> Save</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Search;