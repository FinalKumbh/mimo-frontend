import React, {  useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./review.css";
import ReviewEditor from "./ReviewEditor";
import ReviewList from "./ReviewList";

import {HeaderNav} from "../nav/HeaderNav";
import { FooterNav } from "../nav/FooterNav";

const Review = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        like: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      };
    });

    setData(initData);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const onCreate = useCallback((author, content, like) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      like,
      created_date,
      id: dataId.current
    };

    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  const getReviewAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }

    const goodCount = data.filter((it) => it.like >= 3).length;
  //  const badCount = data.length - goodCount;
  //  const goodRatio = (goodCount / data.length) * 100.0;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getReviewAnalysis;

  return (
    <div className="Review">
      <HeaderNav/>



      <ReviewEditor onCreate={onCreate} />
      <div>전체 리뷰 개수 : {data.length}</div>
      <div>좋은 평을 받은 립스틱 개수 : {goodCount}</div>

      <div className="review_title">
            리뷰
        </div>
        <img className="review_user1" src={process.env.PUBLIC_URL+`assets/image/kimJiyeon_1.png`  }/>
        <div className="review_contents1">
        색상 다 너무 예쁘고 정말 입술에 편안하게 올라갑니다. 매트립 좋아하시는 분들은 좋아하실 거 같아요.
        <img className="review_user1" src={process.env.PUBLIC_URL+`assets/image/akar-icons_heart.png`  }/>
        </div>
        <div className="review_user1_name">
            김미모
            2022.02.24
        </div>
        <div className="review_user1_count">218</div>
        <img className="review_user2" src={process.env.PUBLIC_URL+`assets/image/Instagram 1.png`  }/>
        <div  className="review_user2_name">
        엔코뷰티
        2022.02.10
        </div>
        <img className="review_user1_prod" src={process.env.PUBLIC_URL+`assets/image/be86113361437c786ea6223586ba7cd1.jpeg`  }/>
        <div className="review_contents2">
        3개나 샀어요ㅠㅠㅠ 너무예쁘고 진짜 가볍고 포근하게 올라가요 단점은 묻어남이 많다는거?! 그거말고는 지워질때도 색이 이쁘게지워져서 넘...
         </div>
         <img className="review_user1_prod" src={process.env.PUBLIC_URL+`assets/image/akar-icons_heart.png`  }/>


      <div className="review_user1_count">323</div>
      <ReviewList onEdit={onEdit} onRemove={onRemove} ReviewList={data} />
      <FooterNav/>
    </div>
  );
};
export default Review;