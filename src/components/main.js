import React from 'react';
import {connect } from 'react-redux';
import {fetchProduct,fetchNifty} from '../redux/ActionCreators';
//import Loading from '../components/LoadingComponent';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import {Container,Button,Row,Col} from 'reactstrap';
import {LocalForm,Control} from 'react-redux-form';
const mapDispathToProps= (dispatch) => {
    return {
        fetchProduct: (value) => {
            dispatch(fetchProduct(value))},
        fetchNifty: () => {
            dispatch(fetchNifty())
        }
        
    }
}

const mapStateToProps= state => {
    return{
        prod : state.product,
        nifty: state.nifty
    }
}


class Main extends React.Component{

    constructor(props){
        super(props);
    
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit=(values,e)=> {
        let value=JSON.stringify(values["stock"]);
        //console.log(value);
        if(value===undefined){
            alert('select one')
        }
        else{
            this.props.fetchProduct(value)
        }
    
    
    
    
    }
    componentDidMount(){
        
        
        this.props.fetchNifty();
        
    }
   
    render(){
      let charts=(
          <div><h3>Please select one</h3></div>
      )
     
        if(this.props.prod.isLoading || this.props.nifty.isLoading ){
             charts= (
              <></>
                )

        }
        else{
            let stocks=this.props.prod.product;
            let nifty=this.props.nifty.product;
            let obj,obj1;

            
            var ohlc=[];
            var ohlc1=[];
            var volume1=[];
            var volume=[];
            
           Object.keys(stocks).map(date=>{
               
                obj = stocks[date];
                let newDate = new Date(date).getTime();
                
                ohlc.push([
                    newDate,parseFloat(obj['1. open']),parseFloat(obj['2. high']),parseFloat(obj['3. low']),parseFloat(obj['4. close'])
                ])
                volume.push([
                    newDate,parseFloat(obj['5. volume'])
                ])
               // Object.keys(obj).map(key=>{
                 //   console.log(obj[key])
                //})
                return (ohlc,volume)
              
                
            })
            
            Object.keys(nifty).map(date=>{
               
                obj = nifty[date];
                let newDate = new Date(date).getTime();
                
                ohlc1.push([
                    newDate,parseFloat(obj['1. open']),parseFloat(obj['2. high']),parseFloat(obj['3. low']),parseFloat(obj['4. close'])
                ])
                volume1.push([
                    newDate,parseFloat(obj['5. volume'])
                ])
               // Object.keys(obj).map(key=>{
                 //   console.log(obj[key])
                //})
                return (ohlc1,volume1)
                
            })
         
           
            const options = {
                title: {
                  text: 'My chart'
                },
                yAxis: [{
                    labels: {
                        align: 'left'
                    },
                    height: '80%',
                    resize: {
                        enabled: true
                    }
                }, {
                    labels: {
                        align: 'left'
                    },
                    top: '80%',
                    height: '20%',
                    offset: 0
                }],
                series: [{
                    type: 'ohlc',
                    id: 'aapl-ohlc',
                    name: 'AAPL Stock Price',
                    data: ohlc
                }, {
                    type: 'column',
                    id: 'aapl-volume',
                    name: 'AAPL Volume',
                    data: volume,
                    yAxis: 1
                }],
                tooltip: {
                    shape: 'square',
                    headerShape: 'callout',
                    borderWidth: 0,
                    shadow: false,
                    positioner: function (width, height, point) {
                        var chart = this.chart,
                            position;
        
                        if (point.isHeader) {
                            position = {
                                x: Math.max(
                                    // Left side limit
                                    chart.plotLeft,
                                    Math.min(
                                        point.plotX + chart.plotLeft - width / 2,
                                        // Right side limit
                                        chart.chartWidth - width - chart.marginRight
                                    )
                                ),
                                y: point.plotY
                            };
                        } else {
                            position = {
                                x: point.series.chart.plotLeft,
                                y: point.series.yAxis.top - chart.plotTop
                            };
                        }
        
                        return position;
                    }},
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 1000
                            },
                            chartOptions: {
                                rangeSelector: {
                                    inputEnabled: false
                                }
                            }
                        }]
                    }
                
    
              
            
              }
              const options1 = {
                title: {
                  text: 'Nifty index'
                },
                yAxis: [{
                    labels: {
                        align: 'left'
                    },
                    height: '80%',
                    resize: {
                        enabled: true
                    }
                }, {
                    labels: {
                        align: 'left'
                    },
                    top: '80%',
                    height: '20%',
                    offset: 0
                }],
                series: [{
                    type: 'ohlc',
                    id: 'aapl-ohlc',
                    name: 'AAPL Stock Price',
                    data: ohlc1
                }, {
                    type: 'column',
                    id: 'aapl-volume',
                    name: 'AAPL Volume',
                    data: volume1,
                    yAxis: 1
                }],
                tooltip: {
                    shape: 'square',
                    headerShape: 'callout',
                    borderWidth: 0,
                    shadow: false,
                    positioner: function (width, height, point) {
                        var chart = this.chart,
                            position;
        
                        if (point.isHeader) {
                            position = {
                                x: Math.max(
                                    // Left side limit
                                    chart.plotLeft,
                                    Math.min(
                                        point.plotX + chart.plotLeft - width / 2,
                                        // Right side limit
                                        chart.chartWidth - width - chart.marginRight
                                    )
                                ),
                                y: point.plotY
                            };
                        } else {
                            position = {
                                x: point.series.chart.plotLeft,
                                y: point.series.yAxis.top - chart.plotTop
                            };
                        }
        
                        return position;
                    }},
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 1000
                            },
                            chartOptions: {
                                rangeSelector: {
                                    inputEnabled: false
                                }
                            }
                        }]
                    }
                
    
              
            
              }
         
            
             charts= (
            <div>
                <Container>
                <HighchartsReact
              highcharts={Highcharts}
                options={options}
                constructorType={'stockChart'}
                 />
                      <HighchartsReact
              highcharts={Highcharts}
                options={options1}
                constructorType={'stockChart'}
                 />
                </Container>
          
             
            </div>
        )}
        return(
            <div>
                <Container className="mt-5 text-center">
                    <h2>
                        Compare stocks with Nifty Index<br/>
                        
                    </h2>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="mt-5">
                    <Col md={{size:6,offset:3}} >
                    <Control.select model=".stock" name="stock"
                                        className="form-control">
                                        <option >Please Select One</option>
                                        <option value="IBM">IBM</option>
                                        <option value="AMZN">Amazon</option>
                                        <option value="GOOGL">Google</option>
                                        <option value="FB">Facebook</option>
                                        <option value="MSFT">Microsoft</option>
                                    </Control.select>
                    </Col>
                    <Col md={{size:2}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                </Row>
                </LocalForm>
 
          
          {charts}
                </Container>
      
          </div>
        
           
        )
       
    }

    
}

export default connect(mapStateToProps,mapDispathToProps)(Main)