// import React from 'react';
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';

// const CircularProgressBar = ({ progress, height = 300, width = 300 }) => {
//     const totalParts = 30;
//     const completedParts = Math.round((progress / 100) * totalParts);
  
//     // Create data for the segments
//     const data = [];
//     for (let i = 0; i < totalParts; i++) {
//       if (i < completedParts) {
//         data.push({ name: 'Completed', y: 1, color: '#4caf50' }); // Completed part
//       } else {
//         data.push({ name: 'Remaining', y: 1, color: '#e0e0e0' }); // Remaining part
//       }
//     }
  
//   const options = {
//     chart: {
//       type: 'pie',
//       options3d: {
//         enabled: true,
//         alpha: 45,
//       },
//       backgroundColor: 'transparent',
//     },
//     title: {
//       text: '',
//     },
//     plotOptions: {
//       pie: {
//         innerSize: '60%',
//         depth: 45,
//         dataLabels: {
//           enabled: false,
//         },
//         showInLegend: false,
//         startAngle: 0,
//         endAngle: 360,
//         size: '100%',
//       },
//     },
//     series: [{
//       name: 'Progress',
//       data: data,
//     }],
//     credits: {
//       enabled: false,
//     },
//   };

//   return (
//     <div style={{ width: `${width}px`, height: `${height}px` }}>
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={options}
//       />
//     </div>
//   );
// };

// export default CircularProgressBar;

import React from 'react';
// Ensure you have this CSS file imported

const CircularProgressBar = ({ percentage }) => {
    const totalSegments = 18;
    const filledSegments = Math.round((percentage / 100) * totalSegments);

    const segments = [...Array(totalSegments)].map((_, index) => {
        const angle = (index * 180) / totalSegments - 90;
        return (
            <line
                key={index}
                x1="60"
                y1="10"
                x2="60"
                y2="20"
                transform={`rotate(${angle} 60 70)`}
                stroke={index < filledSegments ? '#fff' : '#60456b'}
                strokeWidth="6"
                strokeLinecap="round"
            />
        );
    });

    return (
        <div className="segmented-container">
            <div className="segmented-header">
                <div className="segmented-title">
                    <i className="icon"></i> <p className='para'>Protein Penetration</p>
                    <div className=''>
                    <text  className="percentage-text">
                    {percentage}%
                </text>
                    </div>
                </div>
                {/* <div className="segmented-image"></div> */}
            </div>
            <svg width="150" height="90" className="segmented-svg">
                <g className="segmented-lines">{segments}</g>
                {/* Centering text */}
                
            </svg>
            {/* <text x="50%" y="50%" dy=".3em" textAnchor="left" className="percentage-text">
                    {percentage}%
                </text> */}
        </div>
    );
};

export default CircularProgressBar;

