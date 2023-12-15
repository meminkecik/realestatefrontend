import React, { useEffect, useState } from "react";
import { Card, CardText, Container } from "react-bootstrap";
import { FaExpand, FaBed, FaPhone } from "react-icons/fa";
import "./estate-card.scss";
import { getAllEstateByPage } from "../../api/post-service";
import { DataView } from "primereact/dataview";
import 'primeflex/primeflex.css';
import {refreshToken} from "../../store/slices/misc-slice";
import {  useDispatch, useSelector } from "react-redux";

const EstateCard = ({searchData}) => {
<<<<<<< HEAD
=======
  const {listRefreshToken} = useSelector((state) => state.misc);
>>>>>>> cb9a00cde6abe90a38924fa7772bd2cc18b8d501
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
    page: 0,

  });
  const onPage = (event) => {
    setLazyState(event);
  };
  const loadData = async () => {
    try {
      const resp = await getAllEstateByPage({
        page: lazyState.page,
        size: lazyState.rows,
        sort: 'city',
        type: 'desc',
        searchData: searchData,
      });
<<<<<<< HEAD
      console.log(resp.content)
=======
>>>>>>> cb9a00cde6abe90a38924fa7772bd2cc18b8d501
      setList(resp.content);
      setTotalRecords(resp.totalElements);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, [searchData]);

const itemTemplate = (product) => {
    return (

        <Card className="maincard col-md-3 col-sm-6 m-4">
      <div className="top-img">
          <Card.Img
            className="img"
            src="/images/apartment1.jpg"
            alt="Card image"

          />
        </div>
        <Card.ImgOverlay className="overlay">
          <Card.Title className="top-title" id="estateType">
            {product.estateType}
          </Card.Title>
        </Card.ImgOverlay>
        <Card.Body className="card-body1">
          <CardText>{product.price} TL</CardText>
          <Card.Link href="#">
            <FaPhone />
          </Card.Link>
        </Card.Body>
        <Card.Body className="card-body2">
          <CardText>{product.header}</CardText>
          <CardText>{product.address}/{product.city}</CardText>
        </Card.Body>
        <Card.Body className="card-body3">
          <CardText>
            <FaExpand /> {product.squareMeter} sqft
          </CardText>
          <CardText>
            <FaBed /> {product.roomNumber} rooms
          </CardText>
        </Card.Body>
        </Card>
    );
  }; 


  return (
    <Container>
     <div>

        <DataView
        value={list}
        lazy
        dataKey="id"
        itemTemplate={itemTemplate}
        paginator = {true}
        first={lazyState.first}
        loading={loading}
        totalRecords={totalRecords}
        onPage={onPage}
        rows={lazyState.rows}
        layout= "grid"
      >
  
            </DataView>
            </div>
    </Container>
  );
};

export default EstateCard;
