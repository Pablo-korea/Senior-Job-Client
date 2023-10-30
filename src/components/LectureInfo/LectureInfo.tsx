import RegionInfo from './RegionInfo';
import ContentInfo from './ContentInfo';
import PaymentInfo from './PaymentInfo';
import QuestionsInfo from './QuestionsInfo';
import PriceInfo from './PriceInfo';
import ScheduleInfo from './ScheduleInfo';

interface LectureInfoProps {
    type: 'region' | 'lectureContent' | 'payment' | 'question' | 'price' | 'schedule';
    lecturetype?: string;
    region?: string;
    content?: string;
    bankname?: string;
    accountnumber?: string;
    accountname?: string;
}

const LectureInfo = ({ type, region, content, bankname, accountnumber, accountname, lecturetype }: LectureInfoProps) => {
    const subInfo = {
        region: <RegionInfo region={region} lecturetype={lecturetype} />,
        lectureContent: <ContentInfo content={content} lecturetype={lecturetype} />,
        payment: <PaymentInfo bankname={bankname} accountnumber={accountnumber} accountname={accountname} />,
        question: <QuestionsInfo />,
        price: <PriceInfo />,
        schedule: <ScheduleInfo />
    };
    return <>{subInfo[type]}</>;
};

export default LectureInfo;
