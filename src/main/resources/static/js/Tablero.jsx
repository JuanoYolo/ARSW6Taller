class Tablero extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (d) => {

        d.setup = () => {
            d.createCanvas(640, 480);
        };

        d.draw = () => {

            if (d.mouseIsPressed === true) {
                d.fill(0, 0, 0);
                d.ellipse(d.mouseX, d.mouseY, 20, 20);
            }
            if(d.mouseIsPressed === false) {
                d.fill(245,245,245);
            }

        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        )
    }
}

ReactDOM.render(
    <Tablero />, document.getElementById("app"))