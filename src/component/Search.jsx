import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

export default class Search extends Component {
  state = {
    search: '',
    type: 'all'
  };
  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.props.searchFilm(this.state.search, this.state.type);
    }
  };
  handleClick = (e) => {
    this.props.searchFilm(this.state.search, this.state.type);
  };
  handleChange = (e) => {
    this.setState({type: e.target.value}, () => {
      this.props.searchFilm(this.state.search, this.state.type);
    })
  };
  render() {
    return (
      <div className='searching'>
        <TextField
          className='search'
          id='standard-basic'
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleEnter}
        />
        <Button variant='contained' onClick={this.handleClick}>
          Search
        </Button>
        <div className='types'>
          <RadioGroup
            row
            aria-label='position'
            name='position'
            defaultValue='top'>
            <FormControlLabel
              value='all'
              control={<Radio color='primary' />}
              label='All'
              onChange={this.handleChange}
              checked={this.state.type === 'all'}
            />
            <FormControlLabel
              value='movie'
              control={<Radio color='primary' />}
              label='Movies only'
              onChange={this.handleChange}
              checked={this.state.type === 'movie'}
            />
            <FormControlLabel
              value='series'
              control={<Radio color='primary' />}
              label='Series only'
              onChange={this.handleChange}
              checked={this.state.type === 'series'}
            />
          </RadioGroup>
        </div>
      </div>
    );
  }
}
