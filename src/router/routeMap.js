import App from '../App'
import ParentComponent from '../component/ParentComponent'
import ChildComponent  from '../component/ChildComponent'
import FnComponent from '../component/fnComponent'
import Login from '../component/Login'

export default [
    { path: "/",  component: App },
    //path: "/Parent" 不可用
    //{ path: "/Parent",  component: ParentComponent, childPath: '/Parent/Child', childComponent: ChildComponent},
    { path: "/Parent/Child",  component: ParentComponent, childPath: '/Parent/Child', childComponent: ChildComponent},
    { path: "/FnComponent",  component: FnComponent },
    { path: "/Login",  component: Login },
]