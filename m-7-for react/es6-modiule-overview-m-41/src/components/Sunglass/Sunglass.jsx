import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, devideTheFirstNumberByTheSecondNumber as devide } from '../../Utilites/calculate';
// import add from '../../Utilites/calculate';
const Sunglass = () => {
    const first=55;
    const second=199;
    // const sum=add(first, second);

    const sum =add(first, second);
    const mult=multiply(first, second);
    const vaag=devide(first, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;