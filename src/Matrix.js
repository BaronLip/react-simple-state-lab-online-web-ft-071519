import React, { Component } from 'react';
import Cell from './cell.js';

export default class Matrix extends Component {
    
    genRow = (vals) => {
        //console.log(vals)
        return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
    }
    
    genMatrix = () => {
        //console.log(this.props.values)
        return this.props.values.map(
            rowVals => <div className="row">{this.genRow(rowVals)}</div>
        )
    }
    
    render() {
        // console.log(this.props.values) // This part works.
        return (
            <div id="matrix">
            {this.genMatrix()}
            
            </div>
            )
        }
    }

    Matrix.defaultProps = {
    values: [['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']]
}