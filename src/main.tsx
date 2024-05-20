import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {route} from "./routes/route.tsx";
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";
import {ModalState} from "./context/ModalContext.tsx";


const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ModalState>
        <Provider store={store}>
            <RouterProvider router={route}/>
        </Provider>
    </ModalState>
)
