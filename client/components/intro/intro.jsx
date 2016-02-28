Intro = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
       let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    handleSubmit(e){
        e.preventDefault();
        var self = this;
        var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
        var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var user = {email:email,password:password,profile:{firstname:first_name,lastname:last_name,avatar:'http://placehold.it/150x150'}};
        Accounts.createUser(user,function(e){
            if(e){
                console.log(e.reason);
            }else{
                FlowRouter.go('/dashboard');
            }
        })
    },
    render(){
        return (
            <div>
                <div className="col-md-6">
                    <div>
                        <img src="/images/logoImg.png" alt="Logo" className="img img-responsive"/>
                    </div>
                    <h1 className="hidden-xs">
                        Projectory
                    </h1>
                    <ul className="list-unstyled ds-btn hidden-xs">
                        <li>
                            <h3 className="btn btn-lg">
                                <i className="fa fa-user"></i>
                                <span>
                                    <strong> Each User</strong>
                                    <small> sees only what they need.</small>
                                </span>
                            </h3>
                        </li>
                        <li>
                            <h3 className="btn btn-lg">
                                <i className="fa fa-list"></i>
                                <span>
                                    <strong> Milestones</strong>
                                    <small> show linked tasks.</small>
                                </span>
                            </h3>
                        </li>
                        <li>
                            <h3 className="btn btn-lg">
                                <i className="fa fa-comment"></i>
                                <span>
                                    <strong> Collaboration</strong>
                                    <small> with email notification.</small>
                                </span>
                            </h3>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="signup">
                            <h1>Sign Up</h1>
                            <p className="text-muted">To manage your projects.</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <input placeholder="First Name" ref="first_name" type="text" className="form-control"/>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <input placeholder="Last Name" ref="last_name" type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Email Address" type="text" className="form-control" ref="email"/>
                                </div>
                                <div className="form-group">
                                    <input placeholder="Password" type="password" className="form-control" ref="password"/>
                                </div>
                                <button type="submit" className="btn btn-md btn-success">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});