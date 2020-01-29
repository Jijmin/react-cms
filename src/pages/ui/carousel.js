import React from "react";
import { Card, Carousel } from "antd";
import "./ui.less";

export default class Carousel2 extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Card title="文字背景轮播" className="card-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <h3>八阵图</h3>
              <p>功盖三分国，名成八阵图。</p>
              <p>江流石不转，遗恨失吞吴。</p>
            </div>
            <div>
              <h3>宿建德江</h3>
              <p>移舟泊烟渚，日暮客愁新。</p>
              <p>野旷天低树，江清月近人。</p>
            </div>
            <div>
              <h3>春晓</h3>
              <p>春眠不觉晓，处处闻啼鸟。</p>
              <p>夜来风雨声，花落知多少。</p>
            </div>
          </Carousel>
        </Card>
        <Card title="图片轮播" className="slider-wrap">
          <Carousel autoplay effect="fade">
            <div>
              <img src="/carousel-img/carousel-1.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-2.jpg" alt="" />
            </div>
            <div>
              <img src="/carousel-img/carousel-3.jpg" alt="" />
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}
