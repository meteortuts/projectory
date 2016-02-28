publicRoutes = FlowRouter.group({
    name:'publicroutes'
});
privateRoutes = FlowRouter.group({
    name:'privateroutes'
});
publicRoutes.route('/',{
    name:'Home',
    action:function(){
        ReactLayout.render(Fullscreen,{
            content:<Intro/>,
            header:<Header/>
        })
    }
});
privateRoutes.route('/dashboard',{
    name:'Dashboard',
    action:function(){
        ReactLayout.render(Fullscreen,{
            content:<div>Dashboard</div>,
            header:<Header/>
        })
    }
});
publicRoutes.route('/signout',{
    name:'Sign Out',
    action:function(){
        Meteor.logout(function(){
            FlowRouter.go('/');
        })
    }
});