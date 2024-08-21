// import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
// import HighchartsMore from 'highcharts/highcharts-more'; // Import highcharts-more


// // Initialize the modules
// HighchartsMore(Highcharts);



// const  HomeScreen = () => {

//     const options = {
//         chart: {
//             type: 'bubble',
//             plotBorderWidth: 1,
//             zoomType: 'xy'
//         },
//         title: {
//             text: 'Colored Bubbles Chart'
//         },
//         xAxis: {
//             title: {
//                 text: 'Market Share (%)'
//             },
//             min: 0,
//             max: 100
//         },
//         yAxis: {
//             title: {
//                 text: 'Growth Rate (%)'
//             },
//             min: 0,
//             max: 100
//         },
//         series: [{
//             name: 'Companies',
//             data: [
//                 { x: 30, y: 70, z: 50, marker: { fillColor: '#FF5733' } },
//                 { x: 50, y: 60, z: 30, marker: { fillColor: '#33FF57' } },
//                 { x: 80, y: 40, z: 20, marker: { fillColor: '#3357FF' } },
//                 { x: 20, y: 90, z: 60, marker: { fillColor: '#FF33A1' } },
//                 { x: 70, y: 20, z: 10, marker: { fillColor: '#FFFF33' } }
//             ]
//         }]
//     };

//     return (
//         <div>
//             <HighchartsReact
//                 highcharts={Highcharts}
//                 options={options}
//             />
//         </div>
//     );
// };
// export default HomeScreen;



import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import CircularProgressBar from './CircularProgressBar';
import one from './assets/convert.svg'
import two from './assets/box.svg';
import three from './assets/wallet-add.svg'
import four from './assets/recovery-convert.svg'


// Initialize the modules
HighchartsMore(Highcharts);
const HomeScreen = () => {
    const options = {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
        title: {
            text: 'Penetration Bubble Chart',
            align: 'left',
        },
        subtitle: {
            useHTML: true,
            text: `
                <div style="display: flex; align-items: center; gap: 20px; padding-bottom:10px;padding-top:10px">
                    <div><span style="display: inline-block; width: 10px; height: 10px; background-color: #3b3eac; border-radius: 50%; margin-right: 5px;"></span>  Snacks & Branded Foods</div>
                    <div><span style="display: inline-block; width: 10px; height: 10px; background-color: #56b1bf; border-radius: 50%; margin-right: 5px;"></span> Beverages </div>
                    <div><span style="display: inline-block; width: 10px; height: 10px; background-color: #fe9c78; border-radius: 50%; margin-right: 5px;"></span>Bakery, Cakes & Dairy </div>
                    <div><span style="display: inline-block; width: 10px; height: 10px; background-color: #c84b31; border-radius: 50%; margin-right: 5px;"></span> Wellness </div>
                </div>`,
            align: 'left',
            x: 0
        },
        xAxis: {
            title: {
                text: 'Penetration (%)'
            },
            min: 3,
            max: 30,
            gridLineWidth: 1,
            gridLineColor: '#ccc'
        },
        yAxis: {
            title: {
                text: 'Value (Rupees)'
            },
            min: 10000,
            max: 45000,
            tickInterval: 5000,
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            },
            gridLineWidth: 1,
            gridLineColor: '#ccc',
            tickPositions: [10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000]
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}</b><br/>Penetration: {point.z}%<br/>Value: {point.y} Rupees'
        },
        series: [{
            name: 'Categories',
            minSize: 40,
            maxSize: 40,
            data: [
                { 
                    x: 27, 
                    y: 30000, 
                    z: 27.3, 
                    name: 'Oats & Porridge',
                    marker: {
                        fillColor: '#3b3eac' // Snacks & Branded Foods
                    }
                },
                { 
                    x: 24, 
                    y: 25000, 
                    z: 24.3, 
                    name: 'Kids Flakes',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 17, 
                    y: 40000, 
                    z: 17.2, 
                    name: 'Cereal & Granola',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 16, 
                    y: 16000, 
                    z: 16.1, 
                    name: 'Pastas',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 16, 
                    y: 27000, 
                    z: 16.9, 
                    name: 'Kids MFD',
                    marker: {
                        fillColor: '#56b1bf' // Beverages
                    }
                },
                { 
                    x: 10, 
                    y: 32000, 
                    z: 10.2, 
                    name: 'Muesli',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 11, 
                    y: 36000, 
                    z: 11, 
                    name: 'Family Flakes',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 13, 
                    y: 21000, 
                    z: 13.2, 
                    name: 'Yogurt',
                    marker: {
                        fillColor: '#fe9c78' // Bakery, Cakes & Dairy
                    }
                },
                { 
                    x: 13, 
                    y: 24000, 
                    z: 13, 
                    name: 'Namkeen & Sav...',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 9, 
                    y: 22000, 
                    z: 9.7, 
                    name: 'Breakfast Mix...',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 6, 
                    y: 30000, 
                    z: 5.8, 
                    name: 'Soya Milk',
                    marker: {
                        fillColor: '#56b1bf' // Beverages
                    }
                },
                { 
                    x: 8, 
                    y: 30000, 
                    z: 8.9, 
                    name: 'Protein Supplements',
                    marker: {
                        fillColor: '#c84b31' // Wellness
                    }
                },
                { 
                    x: 15, 
                    y: 16000, 
                    z: 15.9, 
                    name: 'Roasted Seed &...',
                    marker: {
                        fillColor: '#3b3eac' // Snacks & Branded Foods
                    }
                },
                { 
                    x: 9, 
                    y: 38000, 
                    z: 8.5, 
                    name: 'Exotic & Flavoured...',
                    marker: {
                        fillColor: '#3b3eac'
                    }
                },
                { 
                    x: 4, 
                    y: 14000, 
                    z: 4, 
                    name: 'Ice Creams',
                    marker: {
                        fillColor: '#fe9c78' // Bakery, Cakes & Dairy
                    }
                },
                { 
                    x: 6, 
                    y: 17000, 
                    z: 6, 
                    name: 'Health Drinks',
                    marker: {
                        fillColor: '#56b1bf' // Beverages
                    }
                }
            ],
            dataLabels: {
                enabled: true,
                useHTML: true,
                formatter: function () {
                    return `<div style="text-align: center; color: white; font-size: 14px;">${this.point.z}%</div>`;
                },
                style: {
                    textOutline: 'none',
                    fontSize: '14px', // Adjusted font size
                    pointerEvents: 'none'
                },
                crop: false,
                overflow: 'none'
            }
        }]
    };
    
    
    
    
    

    return (
        <div>
            <div className='container'>
                <div className='row rowcustom g-3'>
                    <div className='col-md-4 blue_box'>
                        <div className='circular_main_div'>
                                  <CircularProgressBar percentage={89.6} />
                        </div>
                    </div>

                    <div className='col-md-2 box'>
                        <div className='inner_box'>
                            <img src={one} alt="" className='inner_img' />
                            <p> Penetration Change (%) </p>

                        </div>
                        <span className='per1'>
                            +1.7
                        </span>
                    </div>
                    <div className='col-md-2 box'>
                        <div className='inner_box'>
                            <img src={two} alt="" className='inner_img' />
                            <p> Penetration Change (%) </p>

                        </div>
                        <span className='per2'>
                            -3.6
                        </span>
                    </div>
                    <div className='col-md-2 box'>
                        <div className='inner_box'>
                            <img src={four} alt="" className='inner_img' />
                            <p> Penetration Change (%) </p>

                        </div>
                        <span className='per3'>
                            +8.1
                        </span>
                    </div>
                    <div className='col-md-2 box'>
                        <div className='inner_box'>

                            <img src={three} alt="" className='inner_img' />
                            <p> Penetration Change (%) </p>

                        </div>


                        <span className='per4'>
                            1136
                        </span>
                    </div>
                </div>
               
                <div className='chart_main_div'>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
                </div>
            </div>

        </div>
    );
};
export default HomeScreen;