import {Outlet} from 'react-router-dom'

export default function Root() {
    return (
        <div>
            <div>The header</div>
            <Outlet />
            <div>The footer</div>
        </div>
    )
}