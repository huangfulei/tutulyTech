import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface CounterUpProps {
  count: number;
  time: number;
}

export const CounterUp: React.FC<CounterUpProps> = (props) => {
  const { count, time } = props;
  return (
    <>
      {/* {/ <CountUp end={count} duration={3}/> /} */}
      <CountUp end={count} duration={time}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef}>count</span>
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
};
