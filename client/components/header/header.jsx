Header = React.createClass({
    getInitialState(){
        return {
            message:'',
            messageClass:'hidden'
        }
    },
    mixins:[ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        data.fullname = 'Not Found';
        if(Meteor.user()){
            data.fullname = Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname;
        }
        return data;
    },
    handleSubmit(e){
        e.preventDefault();
        var self = this;
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.loginWithPassword(email,password,function(e){
            if(e){
                console.log(e.reason);
            } else{
                FlowRouter.go('/dashboard');
            }
        })
    },
    render(){

        let rightside = (
            <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                    <i className="fa fa-user"></i> {this.data.fullname}
                </a>
                <ul className="dropdown-menu">
                    <li><a href="/profile"> Edit Profile</a></li>
                    <li><a href="/signout"> Log Out</a></li>
                </ul>
            </li>
        );
        if(!this.data.currentUser){
            rightside = (
                <li>
                    <form onSubmit={this.handleSubmit} className="navbar-form navbar-right">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                            <input placeholder="Email Address" type="text" ref="email" className="form-control"/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                            <input placeholder="Password" type="password" ref="password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                        <br/>
                        <span className={this.state.messageClass}>{this.state.message}</span>
                    </form>
                </li>
            )
        }
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/dashboard"><img height="60px" src="/images/logo.png" alt="Logo"
                                                                      className="logo"/></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                {rightside}
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
});