import {Routes, Route} from "react-router-dom";

import {Sidebar} from "./components/sidebar/Sidebar.tsx";
import Dashboard from "./pages/Dashboard.tsx";

export default function App() {
    return (
        <div className="min-h-screen bg-[#faf9fa] flex">
            <Sidebar />

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
}
