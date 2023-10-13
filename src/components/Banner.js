import {useState , useEffect} from "react";
import {Col, Container ,Row} from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg"

export const Banner = () => {
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const toRotate = ["برنامه نویس وب" , "فران اند دولپر" , "فری لنسر"];
    const [text , setText] = useState('');
    const [delta ,setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () =>  {clearInterval(ticker)};
    }, [text]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length -1) : fullText.substring(0 , text.length +1);

        setText(updatedText);

        if (isDeleting){
            setDelta(pervDelta => pervDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1 );
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">به وبلاگ من خوش آمدید</span>
                        <h1>{`سلام من مهرشاد هستم `}<span className="wrap">{text}</span></h1>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای</p>
                        <button onClick={() => console.log('connect')}> همکاری با من <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}