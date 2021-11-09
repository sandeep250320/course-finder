import React from "react";
import ReactApexChart from "react-apexcharts";

const Barchart = (props) => {
    const series = [
        {
          name: props.name, //will be displayed on the y-axis
          data: props.counted
        }
      ];
      const options = {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 20,
            columnWidth: '30%',
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -20
          },
          categories: props.parentList //will be displayed on the x-asis
        },
        yaxis: {
          title: {
            text: 'No. of Subjects',
          },
        },

        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          }
        }
      };
      return (
        <div className="graph">
          <ReactApexChart options={options} type="bar" series={series} width="100%" 
           />
        </div>
      );
};

export default Barchart;