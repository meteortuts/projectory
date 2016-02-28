Fullscreen = React.createClass({
    render(){
        return (
            <div className="wrapper">
                {this.props.header}
                <div className="container pushdown">
                    <div className="col-md-12">
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
});