class CompDidMount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        fetchData().then((data) => {
            this.setState({
                data: data,
            })
        })
    }

    render() {
        return (
            <>
                <h1>Component Did Mount Data: {this.state.data}</h1>
            </>
        )
    }
}