
<style>
.layout-vueechart-echart {
  height: 450px;
  border: 1px solid #d2d2d2;
  margin: 10px 0px;
}
.layout-vueechart-title {
  font-size: 16px;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px solid #d2d2d2;
  background-color: #f4f4f4;
}
</style>

<template>
  <div class="layout-vueechart">
      <Row :gutter="10">
        <Col span="12">
          <div class="layout-vueechart-echart">
              <div class="layout-vueechart-title">
                <p>饼图</p>
              </div>
              <IEcharts :option="pie" :resizable="true"></IEcharts>
          </div>
        </Col>
        <Col span="12">
          <div class="layout-vueechart-echart">
              <div class="layout-vueechart-title">
                <p>折线图</p>
              </div>
              <IEcharts :option="line" :resizable="true"></IEcharts>
          </div>
        </Col>
        <Col span="12">
          <div class="layout-vueechart-echart">
              <div class="layout-vueechart-title">
                <p>柱状图</p>
              </div>
              <IEcharts :option="bar" :resizable="true"></IEcharts>
          </div>
        </Col>
        
      </Row>
  </div>
</template>
<script>
import IEcharts from "vue-echarts-v3";
export default {
  components: {
    IEcharts
  },
  data() {
    return {
      pie: {
        title: {
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 222, name: "直接访问111" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      line: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true
          }
        ]
      },
      bar: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      }
    };
  }
};
</script>
