import {Routes, Route} from "react-router-dom";

import {AppLayout} from "./components/layout/AppLayout";
import {ErrorBoundary} from "./components/generic/ErrorBoundary";
import {Dashboard} from "./pages/Dashboard";
import {Analytics} from "./pages/Analytics";
import {Documents} from "./pages/Documents";
import {Notifications} from "./pages/Notifications";
import {Profile} from "./pages/Profile";
import {Settings} from "./pages/Settings";
import {Help} from "./pages/Help";

export default function App() {
    return (
        <ErrorBoundary>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/help" element={<Help />} />
                </Routes>
            </AppLayout>
        </ErrorBoundary>
    );
}
