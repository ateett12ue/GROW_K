import React from "react";
import { Carousel, Card } from "antd";
export default function CourseCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>really really good content bhai shabh</p>
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>Hello ji saname</p>
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>Dil karta hai tere ballo se khelu</p>
        </Card>
      </div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <p>Gand maregii bhaishabh</p>
        </Card>
      </div>
    </Carousel>
  );
}
