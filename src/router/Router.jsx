import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LectureList from '@pages/LectureList/LectureList';
import ProposalList from '@pages/ProposalList/ProposalList';
import LectureDetail from '@pages/LectureDetail/LectureDetail';
import Mypage from '@pages/Mypage/Mypage';
import MyProfile from '@pages/MyProfile/MyProfile';
import CreateLecture from '@pages/CreateLecture/CreateLecture';
import MainPage from '@pages/MainPage/MainPage';
import OpenLectureList from '@pages/OpenLectureList/OpenLectureList';
import OpenLectureApproval from '@pages/OpenLectureApproval/OpenLectureApproval';
import ProposeLectureDetail from '~/pages/ProposeLectureDetail/ProposeLectureDetail';
import ProposeLectureList from '~/pages/ProposeLectureList/ProposeLectureList';
import ApplyLectureList from '~/pages/ApplyLectureList/ApplyLectureList';
import ParticipateLectureList from '~/pages/ParticipateLectureList/ParticipateLectureList';
import ProposeLectureApproval from '~/pages/ProposeLectureApproval/ProposeLectureApproval';
import LoginPage from '~/pages/LoginPage/LoginPage';
import SignUpPage from '~/pages/SignUpPage/SignUpPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/proposal' element={<ProposalList />} />
                <Route path='/lecture/*' element={<Outlet />}>
                    <Route path='' element={<LectureList />} />
                    <Route path='detail/:createid' element={<LectureDetail />} />
                    <Route path='propose/detail/:createid' element={<ProposeLectureDetail />} />
                </Route>
                {/* <Route path='/lecture' element={<LectureList />} /> */}
                {/* <Route path='/lecture/detail/:createid' element={<LectureDetail />} /> */}
                {/* <Route path='/lecture/propose/detail/:createid' element={<ProposeLectureDetail />} /> */}
                <Route path='/mypage' element={<MyProfile />} />
                <Route path='/mypage/profile' element={<MyProfile />} />
                <Route path='/mypage/lecture/*' element={<Outlet />}>
                    <Route path='created/form' element={<CreateLecture />} />
                    <Route path='participate' element={<ParticipateLectureList />} />
                    <Route path='apply' element={<ApplyLectureList />} />
                    <Route path='propose' element={<ProposeLectureList />} />
                    <Route path='propose/approval/:createid' element={<ProposeLectureApproval />} />
                    <Route path='open' element={<OpenLectureList />} />
                    <Route path='open/approval/:createid' element={<OpenLectureApproval />} />
                </Route>
                {/* <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage/lecture/created/form' element={<CreateLecture />} />
                <Route path='/mypage/lecture/open' element={<OpenLectureList />} />
                <Route path='/mypage/lecture/open/detail' element={<OpenLectureApproval />} />
                <Route path='/mypage/lecture/propose' element={<ProposeLectureList />} />
                <Route path='/mypage/lecture/apply' element={<ApplyLectureList />} />
                <Route path='/mypage/lecture/participate' element={<ParticipateLectureList />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
