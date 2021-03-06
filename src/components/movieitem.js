//import
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class MovieItem extends Component
{
    render(){
        return (
            //movie item div with card that displays array of img title and movie year
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            
                            <img src={this.props.movie.Poster}></img>
                        <footer>
                            {this.props.movie.Year}
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        ); 
        
    }
}
export default MovieItem;