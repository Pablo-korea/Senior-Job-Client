import PriceInfo from './PriceInfo';
import ScheduleInfo from './ScheduleInfo';
import TotalPeople from './TotalPeople';

interface LectureMainInfoProps {
    type: 'cost' | 'schedule' | 'total';
    price?: number;
    startdate?: string;
    enddate?: string;
    maxparticipants?: number;
    currentparticipants?: number;
    cycle?: string;
    count?: number;
}

const LectureMainInfo = ({ type, price, startdate, enddate, maxparticipants, currentparticipants, cycle, count }: LectureMainInfoProps) => {
    const mainInfo = {
        cost: <PriceInfo price={price} />,
        schedule: <ScheduleInfo startdate={startdate} enddate={enddate} cycle={cycle} count={count} />,
        total: <TotalPeople maxparticipants={maxparticipants} currentparticipants={currentparticipants} />
    };
    return <>{mainInfo[type]}</>;
};

export default LectureMainInfo;
