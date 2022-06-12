import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { removeFromCart } from "../../redux/rootReducer";


const List = () => {
  const cart = useSelector((state) => state.product);
  //let [products, setProducts] = useState([]);

  /* 
  useEffect(() => {
   const getProducts = JSON.parse(localStorage.getItem("items"));
    //console.log(getProducts);

    setProducts(getProducts);
  }, []);

  console.log(products); */
  const dispatch = useDispatch();
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Container className="ListCont" fluid>
      <h1 className="listTitle">POPIS ZA KUPNJU</h1>
      <Container className="descCont">
        <Row>
          <Col lg={8}>
            <p className="listD">NAMIRNICE</p>
          </Col>
          <Col lg={2}>
            <p className="listD">KOLIČINA</p>
          </Col>
          <Col lg={2}>
            <p className="listD">UKLONI</p>
          </Col>
        </Row>
        <hr className="horizontalLine" />
      </Container>

      <Container className="nabavkaCont">
        {cart.items.map((item, index) => {
          return (
            <>
              <Row>
                <Col lg={8}>
                  <p
                    className="namirnicaName"
                    key={index}
                    style={{ backgroundColor: item.frColor }}
                  >
                    {item.productName}
                  </p>
                </Col>
                <Col lg={2}>
                  <p className="namirnicaQuantity" key={index}>
                    {item.cartQuantity}
                  </p>
                </Col>
                <Col lg={2}>
                  <FontAwesomeIcon
                    className="xIcon"
                    icon={faXmark}
                    color={"#1f1f1f"}
                    size="m"
                    onClick={() => handleRemoveFromCart(item)}
                  />
                </Col>
              </Row>
            </>
          );
        })}
      </Container>
    </Container>
  );
};

export default List;
