'use strict';

import React, { Component, PropTypes } from 'react'


export default class BiDetail extends Component{
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {    
    }
    
    render() {
        //const mName = this.props.market.slice(0, -3).toUpperCase()
        return (
            <div style={styles.BiContainer}>
                <div style={styles.biNameContainer}>
                    <label style={styles.biName}>ABC</label>
                </div>
                <div style={styles.priceContainer}>
                    <label style={styles.biPrice}>7896</label>
                </div>
                <div style={styles.volumeContainers}>
                    <div style={styles.volumeContainer}>
                        <label style={styles.volumeText}>高</label>
                        <label style={styles.volumeValue}>8765</label>
                    </div>
                    <div style={styles.volumeContainer}>
                        <label style={styles.volumeText}>低</label>
                        <label style={styles.volumeValue}>5432</label>
                    </div>
                    <div style={styles.volumeContainer}>
                        <label style={styles.volumeText}>量</label>
                        <label style={styles.volumeValue}>9525</label>
                    </div>
                </div>                
            </div>
        )
    }
    
}

let styles = {
    BiContainer:{
        flexDirection: 'column',
        borderBottomColor: '#262B31',
        borderBottomWidth: 1,
    },
    biNameContainer:{
        width: 296,
        height: 160,
        flex: 2,
        marginLeft: 24,
        marginRight: 16,
        /*backgroundColor : 'red',*/
        justifyContent: 'center',
    },
    biName:{
        color:'white',
        fontSize: 30,
    },
    priceContainer:{
        width: 320,
        height: 160,        
        flex: 2,
        marginRight: 48,
        /*backgroundColor : 'green',*/
        alignItems: 'center',
        justifyContent: 'center',
    },
    biPrice: {
        color:'white',
        fontSize: 20,
    },
    volumeContainers:{
        width: 160,
        height: 160,
        flex : 2,
        /*backgroundColor : 'blue',*/
        alignItems:'center',
        justifyContent: 'center',
    },
    volumeContainer:{
        flexDirection: 'row',
    },
    volumeText:{
        color:'#61666C',
        marginRight: 5,
        fontSize: 15,
    },
    volumeValue:{
        color:'white',
        fontSize: 15,
    },
};